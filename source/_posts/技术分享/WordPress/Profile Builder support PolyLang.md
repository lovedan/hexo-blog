---
title: Profile Builder to add support for PolyLang plugin in field titles
date: 2017-09-18 22:04:39
tags: [WordPress,plugins]
categories: 
- 技术分享
- WordPress
thumbnail: https://lh3.googleusercontent.com/-tkhVoNvkgUs/Wb_GvTGcKNI/AAAAAAAADe8/lZzfvbxvW9cKNGsf-3bchp9TrsHevdZ0wCHMYCw/I/15057402929163.jpg
---
Shortcode to add support for PolyLang plugin in field titles, descriptions and labels.

**Make sure to:**

* Change Label name in Manage Fields (**click image**):

[![1](https://lh3.googleusercontent.com/-VHCXjHsliLE/Wb6x_rST8XI/AAAAAAAADec/yogRDcV_MK0EPKralcNt9GXjNywID8QFQCHMYCw/I/1-300x91.png)]()

Label name must be (for English and Francais):

UsernameNom d’utilizateur

You can add as many languages as you need.

You must translate each field like in the e.g. above.

* Add shortcode at the top of your page:

**[wppb_polylang_compat]**



Now when you change language with Language Switcher the fields language will change.

This is more like a hack to make it work.

```
/*
 * Shortcode to add support for PolyLang plugin in field titles, descriptions and labels.
 */

add_shortcode('wppb_polylang_compat', 'wppb_polylang_compat');
function wppb_polylang_compat($atts,$content=null){
   return "
      jQuery(document).ready(function(){
         curr_lang = jQuery('html')[0].lang;
         jQuery('.wppb-user-forms li label > span, .wppb-user-forms li .wppb-description-delimiter > span').each(function(element){
            jQuery(this).hide();
            if ( jQuery(this).attr('lang') == curr_lang ){
               jQuery(this).show();
            }
         })
      });
   ";
}
```