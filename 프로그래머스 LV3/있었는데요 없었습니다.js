`SELECT I.ANIMAL_ID,I.NAME FROM ANIMAL_INS I LEFT JOIN ANIMAL_OUTS O ON I.ANIMAL_ID = O.ANIMAL_ID WHERE I.DATETIME > O.DATETIME ORDER BY I.DATETIME`;
