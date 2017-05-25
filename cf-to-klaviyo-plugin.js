var LIST_ID = "Q5KHAH";
var API_KEY = "pk_062326770f82ba8c3a1eb6d3f48f7dfbb0";

/*
$phone_number phone number
$title title at their business or organization
$organization business or organization they belong to
$city city they live in
$region region or state they live in
$country country they live in
$zip postal code where they live
$image url to a photo of the person
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

    $.post("https://a.klaviyo.com/api/v1/list/"+LIST_ID+"/members",
    {
      api_key: API_KEY,
      email: email,
      properties: '{ "$first_name" : fname, "$last_name" : lname, "$city" : city, "$zip" : zip, "$country" : country, "$region" : state, "$phone_number" : phone}',
      confirm_optin: false
    },
    function(data,status){
       // alert
    });
};
