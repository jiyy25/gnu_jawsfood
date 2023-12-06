<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가


$list_count = (is_array($list) && $list) ? count($list) : 0;
?>

<div class="lat <?php echo $bo_table; ?>">
    <h2 class="text-center mb-5">
       <?php echo $bo_subject ?>
    </h2>
    <ul class ="row main_boba_info">
    <?php for ($i=0; $i<$list_count; $i++) {  ?>
        <li class="col-3 border p-5 <?php echo $list[$i]['subject'] ?> <?php echo $bo_table.$i; ?>">
            <?php
            echo "<a href=\"".get_pretty_url($bo_table, $list[$i]['wr_id'])."\"> ";
            echo $list[$i]['wr_content'] ;
            echo "</a>";
            ?>
        </li>
    <?php }  ?>
    <?php if ($list_count == 0) { //게시물이 없을 때  ?>
    <li class="empty_li">게시물이 없습니다.</li>
    <?php }  ?>
    </ul>

</div>
