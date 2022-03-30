(ns kol.main.core
  (:require
   ["electron" :refer [app BrowserWindow ipcMain]]
   ["path" :as path]
   [kol.main.repl :as repl]))

;; Electron single window
(defonce main-window (atom nil))
;; Atom for set quitting state on MacOS
(defonce quitting (atom false))

(def browser-window-config
  {:width           1080
   :height          800
   :frame           false
   :backgroundColor "#171717"
   :titleBarStyle   "hidden"
   ;; Position of MacOS traffic light buttons
   :trafficLightPosition {:x 10, :y 8}
   :webPreferences
   {:nodeIntegration true
    :preload (.join path js/__dirname "/preload.js")}})

(defn on-window-close
  "On MacOS, hide the window instead of closing to keep transient state."
  [e]
  ;; https://stackoverflow.com/a/45156004/2116927
  ;; Also see remaining code from the example in the `main` fn below.
  (when (and (= js/process.platform "darwin")
             (not @quitting))
    (.. e preventDefault)
    (.. ^js @main-window hide)))

(defn on-eval-request
  "Evaluate code writing it on the REPL socket."
  [event code]
  (repl/eval code))

(defn on-eval-response
  "Callback when socket receive data from REPL."
  [data]
  (println "Sending data....")
  (.send (.-webContents ^js @main-window) "repl-data" (str data)))

(defn init-browser
  "Initialize the main BrowserWindow, loading the URL and appending
  events."
  []
  (reset!
   main-window
   (BrowserWindow. (clj->js browser-window-config)))
  ;; Path is relative to the compiled js file (main.js in our case)
  (.loadURL ^js @main-window (str "file://" js/__dirname "/public/index.html"))
  (.on ^js @main-window "closed" #(reset! main-window nil))
  (.on ^js @main-window "close" on-window-close)
  (.on ipcMain "eval" on-eval-request)
  (repl/connect {:on-response on-eval-response}))

(defn activate-browser
  "Activate the browser window if available or create a new one."
  []
  (if (nil? @main-window)
    (init-browser)
    (.show @main-window)))

(defn on-app-quit []
  (repl/close))

(defn main []
  (.on app "window-all-closed" #(when-not (= js/process.platform "darwin")
                                  (.quit app)))
  (.on app "before-quit" #(reset! quitting true))
  (.on app "will-quit" on-app-quit)
  (.on app "activate" activate-browser)
  (.on app "ready" init-browser))
