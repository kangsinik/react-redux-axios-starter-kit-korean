@echo off
@rem 1st writer lepffm.kim@samsung.com
@rem 2nd writer kwangyoung49.kim@samsung.com
@rem download and run chromedriver
@rem https://theintern.github.io/intern/#local-selenium
@rem download from https://sites.google.com/a/chromium.org/chromedriver/

set CURRENT_PATH=%cd%
set CHROME_DRIVER_ZIP_FILE=%CURRENT_PATH%\chromedriver_win32.zip
set CHROME_DRIVER_EXE_FILE=%CURRENT_PATH%\chromedriver.exe

@rem download chromedriver
if NOT EXIST %CHROME_DRIVER_EXE_FILE% (
	@rem extract chrome driver zip file
	if NOT EXIST %CHROME_DRIVER_ZIP_FILE% (
		bitsadmin /transfer "downloadChromedriver" /download https://chromedriver.storage.googleapis.com/2.24/chromedriver_win32.zip %CHROME_DRIVER_ZIP_FILE%
	)
	@rem extract chrome driver zip file
	if EXIST %CHROME_DRIVER_ZIP_FILE% (
		jar xf chromedriver_win32.zip
	)
)

%CHROME_DRIVER_EXE_FILE% --port=4444 --url-base=wd/hub
