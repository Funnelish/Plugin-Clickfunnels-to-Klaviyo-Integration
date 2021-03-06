/*\\\\\\\\\\\\\\\\\\\\\\\\--YaYo--///////////////////////////
 * \\      Copyright (c) Yassine Y. (Funnelish.com)       //
 *  \\               All Rights Reserved.                //
 *   \\\\\\\\\\\\\\\\\\\\----<>----///////////////////////
 *==========================================================
 * 	FILE         :  /Funnelish/cf-to-klaviyo-plugin.js
 * 	AUTHOR       :  Yassine Y.
 * 	DESCRIPTION  : 	
 *
 * 	UPDATES      :
 *           _CREATED : May 24, 2017  _By : Yassine Y.
 *           _CHANGED : May 26, 2017  _By : Yassine Y.
 */

function send_to_klaviyo() {
  var email="", fname="", lname="", phone="", city="", state="", country="", zip="";
  
  var emailbox = document.getElementsByName("email")[0];
  if (emailbox == null)
    return; // no email :o 
  email = emailbox.value;
  
  var fnamebox = document.getElementsByName("first_name")[0];
  if (fnamebox != null)
    fname = fnamebox.value;

  var lnamebox = document.getElementsByName("last_name")[0];
  if (lnamebox != null)
    lname = lnamebox.value;

  var phonebox = document.getElementsByName("phone")[0];
  if (phonebox != null)
    phone = phonebox.value;

  var citybox = document.getElementsByName("city")[0];
  if (citybox != null)
    city = citybox.value;

  var statebox = document.getElementsByName("state")[0];
  if (statebox != null)
    state = statebox.value;

  var countrybox = document.getElementsByName("country")[0];
  if (countrybox != null)
    country = countrybox.value;

  var zipbox = document.getElementsByName("zip")[0];
  if (zipbox != null)
    zip = zipbox.value;

  var properties = {
    g: LIST_ID,
    "email": email,
    "$fields": "city,state,country,zip",
    "$first_name": fname,
    "$last_name": lname,
    "state": state,
    "city": city,
    "country": country,
    "zip":zip,
    "phone":phone
  };

  $.post("https://manage.kmail-lists.com/ajax/subscriptions/subscribe",properties).done(function(d){
    console.log("subscription success..!");
  });
}

window.addEventListener("load", function() {
  var divs = document.getElementsByTagName("div");
  for (i = 0; i < divs.length; i++)
  {
    var div = divs[i];
    if (div.getAttribute("data-title") == "optin button" || div.getAttribute("data-de-type") == "button") {
        div.onclick = function() {
        	// Send the lead to Klaviyo 
		send_to_klaviyo();
        };
    }
  }
});
