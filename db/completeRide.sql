update rides set status = 'complete', rating = $1, destdate = $2 where rideid = $3;
