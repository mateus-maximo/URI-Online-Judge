import Text.Printf

main :: IO ()
main = do
        a <- readLn :: IO Double
        b <- readLn :: IO Double
        let media = ((a * 3.5) + (b * 7.5)) / 11
        printf "MEDIA = %.5f\n" $ media