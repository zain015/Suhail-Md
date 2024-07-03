const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/KBaVPBsZQGQC8ItRaEwEMY";
global.website=process.env.GURL || "https://chat.whatsapp.com/KBaVPBsZQGQC8ItRaEwEMY" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "created by mr zain" 


global.devs = "923146856009" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923146856009";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_07_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTExLFxuICAgICAgICA2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDUzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI3LFxuICAgICAgICA5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDIyLFxuICAgICAgICA1NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI2LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEsXG4gICAgICAgIDExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDk2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOCxcbiAgICAgICAgOSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDU2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgODEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDQyLFxuICAgICAgICA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDM0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODMsXG4gICAgICAgIDY1LFxuICAgICAgICA0MixcbiAgICAgICAgMjMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY2LFxuICAgICAgICA2NixcbiAgICAgICAgMjMwLFxuICAgICAgICA5MixcbiAgICAgICAgMjE5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk5LFxuICAgICAgICA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIldpYk5Ya3FiREpHZTJROHNjVUszZzZldW9xeGhRK1dMYnhETXFMOUUxSGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtWMkZFak1YUlpXTXFhcnIyT2RYUVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjg4Nzg1MjQtZmUyZS00ZGFjLWI1YmYtZDM5NzNkZDcwYmViXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDI0NSxcbiAgICAgIDEwOSxcbiAgICAgIDE1MCxcbiAgICAgIDI1MCxcbiAgICAgIDcyLFxuICAgICAgMTcyLFxuICAgICAgMTc0LFxuICAgICAgMTUzLFxuICAgICAgMjAwLFxuICAgICAgMjI0LFxuICAgICAgMTE0LFxuICAgICAgMjUwLFxuICAgICAgMTExLFxuICAgICAgODAsXG4gICAgICA3NSxcbiAgICAgIDIwMyxcbiAgICAgIDUxLFxuICAgICAgODQsXG4gICAgICAxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICAyNDcsXG4gICAgICAxOTcsXG4gICAgICAzNCxcbiAgICAgIDI0OSxcbiAgICAgIDUyLFxuICAgICAgMTU1LFxuICAgICAgMTczLFxuICAgICAgOTQsXG4gICAgICAyMjksXG4gICAgICAxNDUsXG4gICAgICAxOTMsXG4gICAgICA5OCxcbiAgICAgIDYzLFxuICAgICAgMTk2LFxuICAgICAgOCxcbiAgICAgIDM4LFxuICAgICAgMTQ0LFxuICAgICAgMjQ4LFxuICAgICAgMTQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBWRTlWR1BLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNTU0MDk2NDE6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBUnNhbGFuIGtoYW5cIixcbiAgICBcImxpZFwiOiBcIjEwNDUyMjc0MzU5NTEzNDoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNam96YlVHRVBpQWs3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImF0MzQ0eFVGZTUxMytmWms3S056Mm5DK3NUT3hoTW11TllQc0FGdkNjRUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNWFxcDlSNm9JaHdnSmRhMlVnWFpXVy9zM0RCc2d6eDNKTzVMWUI3RTZxWHZFVTN1SzNObll3S2xKd2VaaWhxbHlDeDQxYTI3SVgvN2Q4ZzVsWHZJQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieE13ME0vSWRTcHNhZi9uZS9tSzZEU2cyYVMrWFFBWXRYVXNMR3RwUXpBS2ordkVBakFZNGJRWUdOVFM2TjJYQjJXS3JjOU91NFV3OWxGWWw4OHRUaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDU1NDA5NjQxOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0Nixc"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@HACKERTEACHEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Zain😈",
  ownername:process.env.OWNER_NAME|| "mr zain",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
