## <!DOCTYPE> (Document Type Definition)

This SGML construct specifies the document type definition corresponding to the
document. There are no attributes or events associated with this element.
## Standard Syntax
`<!DOCTYPE "DTD IDENTIFIER">`
## Examples
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 TRANSITIONAL//EN">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 TRANSITIONAL//EN">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www
.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "xhtml11.dtd">
<!DOCTYPE html>
```
### Compatibility

| Standards                                          | Browser
|:---------                                          |:--- 
|  HTML 2, 3.2, 4, 4.01, 5      |Firefox 1+, Internet Explorer 2+, 
|  XHTML 1.0, 1.1, Basic       |Netscape 1+, Opera 4+, Safari 1+ 


:::tip Notes
* The **<!DOCTYPE>** statement should be used as the first line of all documents.
* Validation programs might use this construct when determining the correctness of
an HTML document.
* While HTML5 does not follow the SGML/XML concept of validation, the
**<!DOCTYPE>** is still used. HTML5 does however provide for syntax checking
currently dubbed conformance checking. Note though that conformance checking
does not rely on XML/SGML grammar.
* While HTML5 does not follow the SGML/XML concept of validation, the
 Modern browsers may determine what rendering mode to use depending on the
**<!DOCTYPE>** statement. This is dubbed the doctype switch. An incorrect **<!DOCTYPE>**
that does not correspond to appropriate markup usage may result in inaccurate
display
:::
