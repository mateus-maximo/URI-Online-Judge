import Text.Printf

main :: IO ()
main = do
        a <- readLn :: IO Double
        b <- readLn :: IO Double
        c <- readLn :: IO Double
        let media = ((a * 2.0) + (b * 3.0) + (c * 5.0)) / 10
        printf "MEDIA = %.1f\n" $ media