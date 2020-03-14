fips_codes = {}
jQuery.each(jQuery("#detail tr"), function() {
    t_data = jQuery(this).find("td");
    if(t_data.length == 0) {return;}
//     console.log(t_data);
    fips = t_data[0].innerText;
    name = t_data[1].innerText;
    state = t_data[2].innerText;
    fips_codes[name.toLowerCase()+"_"+state] = {"fips":fips, "name":name, "state":state};
});