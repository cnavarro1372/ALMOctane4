Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set DataTable.Value("username", dtGlobalSheet) @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Password").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").Set DataTable.Value("password", dtGlobalSheet) @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btn").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebElement("cnavarro").Check CheckPoint("cnavarro_2")

