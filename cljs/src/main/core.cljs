(ns core)

(defn ^:exports say [n] (println (str n "Yaaaa")))


(def ^:exports lib 
  {:say say})

(comment 
  
  (say "mee")
  
  )