main :: IO ()
main = do
        a <- readLn :: IO Int
        b <- readLn :: IO Int
        let x = a + b
        putStrLn $ id ("X = " ++ show(x))