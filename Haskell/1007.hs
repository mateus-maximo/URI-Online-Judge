import Text.Printf

main :: IO ()
main = do
        a <- readLn :: IO Int
        b <- readLn :: IO Int
        c <- readLn :: IO Int
        d <- readLn :: IO Int
        let diferenca = ((a * b) - (c * d))
        printf "DIFERENCA = %d\n" $ diferenca