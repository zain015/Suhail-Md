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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_34_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA3MCxcbiAgICAgICAgNzksXG4gICAgICAgIDMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNixcbiAgICAgICAgMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDk0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDM4LFxuICAgICAgICA5NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM3LFxuICAgICAgICA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDMwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NixcbiAgICAgICAgNDksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNixcbiAgICAgICAgODcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgNjcsXG4gICAgICAgIDU5LFxuICAgICAgICA4MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDg4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc2LFxuICAgICAgICA2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKWXNXYVQrTTZlSlVTSWlmaHBMcUVCVnlwUVZnZ2tqMC96ZWxKOWo2MG1FPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzI0MDU3OTk5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FFRTA0M0E5MkI4OUMxNUI1N0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNTYxNjQ0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhLcWltVEtNUkFlQ2lNTFVhem85cWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjgwZWNiNGMtMDI4NS00YWM4LWE5NzgtMDIyMDBkZTA0ZjU2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDE1LFxuICAgICAgMjI4LFxuICAgICAgNyxcbiAgICAgIDExMixcbiAgICAgIDc0LFxuICAgICAgMjI3LFxuICAgICAgMTQxLFxuICAgICAgNjUsXG4gICAgICA3MyxcbiAgICAgIDE1NSxcbiAgICAgIDI5LFxuICAgICAgOTcsXG4gICAgICAyOCxcbiAgICAgIDI0NSxcbiAgICAgIDE4LFxuICAgICAgMjExLFxuICAgICAgMTQwLFxuICAgICAgMTMxLFxuICAgICAgMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICAxNzQsXG4gICAgICA5LFxuICAgICAgMTMzLFxuICAgICAgMzgsXG4gICAgICA5OSxcbiAgICAgIDE0NixcbiAgICAgIDkzLFxuICAgICAgOTMsXG4gICAgICAxNzUsXG4gICAgICAyMTIsXG4gICAgICAyMjksXG4gICAgICAzNixcbiAgICAgIDI0NixcbiAgICAgIDkzLFxuICAgICAgMTQyLFxuICAgICAgMjIzLFxuICAgICAgOTEsXG4gICAgICAxNTEsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3QkQ0ODhCM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQwNTc5OTk1OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmw8J2am/Cdmp3wnZqS8J2aj/CdmpLwnZqM8J2akvCdmorwnZqVIPCdmpLwnZqX8J2anfCdmo7wnZqV8J2alfCdmpLwnZqQ8J2ajvCdmpfwnZqM8J2ajlwiLFxuICAgIFwibGlkXCI6IFwiMjc0NjAzNTgyNzQyNzcxOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnJLMzVNT0VLTGs4N1FHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjUmRIR0o2dDdYbDNMMnhySGRTYUJRcmY4ZEJnOTFNcmwxOGpMYy85ZFJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpZQTVRWWg2bGJHNTg4b0tYdWdpdmp4aFBiQ29OZHJOdm1pYzhkR3FVdVhZZSs2U2xXSEVBOVpLOGpRcGZRVVg5VERBT3RkNEFoR0xQZlJHZVJ0S0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlTZUU3ZkV2K0xDR293OXhwSWFTV0NCUlFYRE1HSFJpRVcreWlqelV2WklBeEN0QnNLNklrMFdsRW8vaUJUU1BIOTFZT1BrTHhucnV2RFllSzdEUUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0MDU3OTk5NTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTYxNjM4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSEpnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISmcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQVGZMSmtjdlFZQUxUM3VQL0dtRU1YZ1EyQWxienJSd2djU2F1MXdpeHh3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM3OTk1MDgzMTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTI0NjkwMTkyNFwifSIKfQ=="  // PUT your SESSION_ID 


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
