<?php

die('unauthorized;');

$shfile = realpath(dirname(__FILE__).'/../../deploy.sh');

if (file_exists($shfile)) {
    exec('/usr/bin/nohup '.dirname(__FILE__).'/../../deploy.sh > /dev/null 2>&1 &');
    echo 'done';
} else {
    echo 'file not found.';
}
