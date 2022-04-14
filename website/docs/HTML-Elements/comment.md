## `<!-- ... -->` (Comment)
This construct encloses text comments that will not be displayed by the browser. It may be
used for informational messages for developers as well as to mask content from user agents
that do not support a particular technology. No attributes or events are associated with this
construct.

## Standard Syntax
`<!-- ... -->`

## Examples
```html
<!-- This is an informational comment that can occur
 anywhere in an HTML document. The next few examples
 show how style sheets and scripts are "commented out" to prevent
 older browsers from misinterpreting the content.
-->
<style type="text/css">
<!--
 h1 {color: red; font-size: 40px;}
-->
</style>
<script type="text/javascript">
<!--
document.write("hello world");
// -->
</script>
```

## Compatibility
| Standards                                          | Browser
|:---------                                          |:--- 
|  HTML 2, 3.2, 4, 4.01, 5      |Firefox 1+, Internet Explorer 2+, 
|  XHTML 1.0, 1.1, Basic       |Netscape 1+, Opera 4+, Safari 1+ 

:::tip Notes
* Comments often are used to exclude content from older browsers, particularly those
that do not understand client-side scripting or style sheets.
* Page developers should be careful when commenting markup to ensure that other
comments are not included or that two dashes (--) are not embedded in the content
commented.
:::




