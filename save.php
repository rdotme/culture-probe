<?php

$raw = $_POST["data"] ?? "";

if (!$raw) {
    echo "NO DATA";
    exit;
}

$folder = "data/";

$files = glob($folder . "*.json");
$nextId = count($files) + 1;

$data = json_decode($raw, true);

$data["id"] = $nextId;
$data["created_at"] = date("c");

$filename = $folder . $nextId . ".json";

file_put_contents(
    $filename,
    json_encode(
        $data,
        JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE
    )
);

echo "OK";

?>