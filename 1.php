  if($_POST)
   {
        $adi= $_POST["adi"];
        $soyadi= $_POST["soyadi"];
        $yasi= $_POST["yasi"];
        if(!empty($adi))
          {
           echo "$adi <br> $soyadi <br> $yasi";
          } 
        else
          {
           echo "Herhangi bir isim girilmedi";
          }
     }
else
{
echo "eğer url'ye biri dışarıdan girerse bu ekranı yazdırın";
}
