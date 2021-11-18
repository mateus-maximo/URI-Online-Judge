main :: IO ()
main = do
        a <- readLn :: IO Int
        b <- readLn :: IO Int
        let prod = a * b
        putStrLn $ id ("PROD = " ++ show(prod))