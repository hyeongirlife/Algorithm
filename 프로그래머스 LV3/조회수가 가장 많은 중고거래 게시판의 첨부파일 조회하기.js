`SELECT CONCAT('/home/grep/src/',F.BOARD_ID,'/',F.FILE_ID,F.FILE_NAME,F.FILE_EXT) as FILE_PATH FROM USED_GOODS_BOARD B INNER JOIN USED_GOODS_FILE F ON B.BOARD_ID = F.BOARD_ID WHERE B.VIEWS = (SELECT MAX(B.VIEWS) FROM USED_GOODS_BOARD B) 
ORDER BY F.FILE_ID DESC`;
