Read: 13 - Local Storage
[“The Past, Present, and Future of Local Storage for Web Applications”](http://diveinto.html5doctor.com/storage.html)

### Brief History 
* IE was the first web browser, and it was created by Microsoft
* DHTML behaviour, one of these behaviours was userData
* useData allowed webpages to store up to 64 KB per domain
* Then flash came along in 2002 thanks to Adobe which introduced Local Share Objects. These could save up to 100 KB for free. 
* 2007 Google launched Gears. Gears provides an API to an embedded SQL database. Gears can store unlimited amounts of data per domain in SQL database tables.
* 2009 dojox.storage: could auto detect Adobe Flash, Gears, Adobe AIR

### Patterns of early Browser Storage
* specified to single browser
* reliant on a third-party plugin

### Introducing HTML5 Storage
* “Local Storage” or “DOM Storage"
* A way for webpages to store key/value parings within users web browser. Data is there even after you navigate off the page
* Available without third party plugin
* **Data is always saved as a string**.
* The storage event is fired on the window object whenever `setItem()`, `removeItem()`, or `clear()` is called and actually changes something
* Each origin gets 5 megabytes of storage by default

### SQL
* Web SQL Database (formerly known as “WebDB”) provides a thin wrapper around a SQL database
* Action exists in the `executeSql` method. Strings include SELECT, UPDATE, INSERT, and DELETE statements.
* It's like backend database programming via js

### Indexed Database API
* Formerly known as “WebSimpleDB"
* Object storage
* There are “databases” with “records,” and each record has a set number of “fields”
* Changes to storage are handled with "transactions"