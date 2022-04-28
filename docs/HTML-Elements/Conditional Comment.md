## `<!-- .[ ].. -->` (Conditional Comment)
This Internet Explorer–specific comment style can be used to mask or include content,
depending on the browser in play.

## Standard Syntax
Hide content if not supported:

`<!--[if expression]> HTML <![endif]-->`

Show content if not supported:

`<![if expression]> HTML <![endif]>`

The expression language supported by conditional comments is relatively simple, consisting
of browser type and version identifier, less-than and greater-than operators, and basic
Boolean operators. The syntax is briefly overviewed in below Table.


## Examples
```html
<!--[if IE 5]>
<link rel="stylesheet" href="ie5.css" type="text/css" media="screen">
<![endif]-->
<!--[if lt IE 7]<p>You are using an old IE! Please upgrade.</p><![endif]-->
<!--[if gte IE 7]><p>Great, you are using IE 7 or greater.</p><![endif]-->
```

| Standards                         | Browser
|:---------                       | :---                                                                                                                              |
| IE                              | The only currently available value to match is the string "IE", corresponding to Internet Explorer.                               |
| number                          | An integer or floating-point value corresponding to the version of the browser.                                                   |
| true                            | The Boolean constant value of true.                                                                                               |
| false                           | The Boolean constant value of false.                                                                                              |
| lt                              | Less-than operator; returns true if the first argument is less than the second argument.                                          |
| lte                             |   Less-than or equal operator; returns true if the first argument is less than or equal to the second argument.                   |
| gt                              |  Greater-than operator; returns true if the first argument is greater than the second argument.                                   |
| gte                             |  Greater-than or equal operator; returns true if the first argument is greater than or equal to the second argument.              |
| ( )                             | Subexpression operators; used to put in parentheses individual components of a more complex expression that uses Boolean operators.|
| &                               |   The Boolean AND operator returns true if all subexpressions evaluate to true.                                                   |
|                                 |The Boolean OR operator returns true if any of the subexpressions evaluates to true.                                               |
| !                               |    Not operator reverses the Boolean meaning of any  expression.                                                                  |

 Microsoft’s Conditional Comment Syntax    

 ## Compatibility
| Standards                                          | Browser
|:---------                                          |:--- 
|  No standards support                              |Internet Explorer 5++                                                                                              



