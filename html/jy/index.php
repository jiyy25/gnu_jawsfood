<?php
include_once('./_common.php'); //모든 변수상수함수가 선언된 핵심 common.php를 호출함

define('_INDEX_', true); //첫페이지만 구분하는 상수변수 선언
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if(defined('G5_THEME_PATH')) {
    require_once(G5_THEME_PATH.'/index.php');
    return;
}

if (G5_IS_MOBILE) {
    include_once(G5_MOBILE_PATH.'/index.php');
    return;
}

include_once(G5_PATH.'/head.php');
?>

<h2 class="sound_only">최신글</h2>
<ul>
    <li>
        <?php echo latest('pic_block','co',5, 100); ?>
    </li>
    <li>
        <?php echo latest('pic_block','mainmn',5, 100); ?>
    </li>
</ul>



<?php
include_once(G5_PATH.'/tail.php');