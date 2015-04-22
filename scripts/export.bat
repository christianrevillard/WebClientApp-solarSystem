xcopy "%1..\..\Apps\SolarSystem\SolarSystem\Client" "%1SolarSystem\Client" /Y /I /S
xcopy "%1..\..\Apps\SolarSystem\Lib\Client" "%1SolarSystem\Client" /Y /I /S /EXCLUDE:%2
