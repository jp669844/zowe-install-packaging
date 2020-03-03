# keyring-util 

The keyring-util program leverages 
[R_datalib callable service](https://www.ibm.com/support/knowledgecenter/SSLTBW_2.4.0/com.ibm.zos.v2r4.ichd100/datalib.htm) 
to perform various operations on digital certificates and RACF key rings.

## Syntax 
```bash
keyring-util function userid keyring label
```
**Parametres:**
 1. `function` see [Functions](##Functions) section below
 2. `userid` - an owner of the `keyring` and `label` certificate 
 3. `keyring` - a name of the keyring
 4. `label` - a label of the certificate 

## Functions
  
  * `NEWRING` - creates a keyring
       * Example: `keyring-util NEWRING USER01 ZOWERING` 
  
  * `DELRING` - deletes a keyring
       * Example: `keyring-util DELRING USER01 ZOWERING`
  
  * `DELCERT` - remove a certificate from a keyring or deletes a certificate from RACF database
    
    **Current Limitation:** The `DELCERT` function can only manipulate a certificate that is owned by the `userid`, i.e. it can't 
     work with certificates owned by the CERTAUTH, SITE or different userid.
     
       The following example removes `localhost` certificate owned by the `USER01` from the `ZOWERING` keyring owner by the `USER01` userid
       * Example: `keyring-util DELCERT USER01 ZOWERING localhost`
       
       The following example removes `localhost` certificate owned by the `USER01` from the RACF database.
       * Example: `keyring-util DELCERT USER01 '*' localhost`
  
  * `REFRESH` - refreshes DIGTCERT class
       * Example: `keyring-util REFRESH`

## Further development
There is room for improvement: 
  * command line argument processing and syntax
  * an extension of functionality of the current functions
  * implementation of new [functions](https://www.ibm.com/support/knowledgecenter/SSLTBW_2.4.0/com.ibm.zos.v2r4.ichd100/ich2d100226.htm) 
    
Work with the following resource if you want to implement a new R_datalib function [Data areas for R_datalib callable service](https://www.ibm.com/support/knowledgecenter/SSLTBW_2.4.0/com.ibm.zos.v2r4.ichc400/comx.htm)
