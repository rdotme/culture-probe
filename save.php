<?php

$input = $_POST["answer"] ?? "";

if ($input) {
    file_put_contents("data/answers.txt", $input . "\n", FILE_APPEND);
    echo "OK";
} else {
    echo "NO DATA";
}

?>