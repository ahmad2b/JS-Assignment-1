let guest = ["Asad", "Osama", "Saif"];
let notComing = "Saif";

function invitationFunction() {
for(let i = 0; i < guest.length; i++)
{
if(guest[i] == notComing)
 {
    guest[i] = "Fahad";
    let invitation = `Hello ${guest[i]}, You are invited to be my guest on weekend`
    console.log(invitation);
 } 
else 
 {
    let invitation = `Hello ${guest[i]}, You are invited to be my guest on weekend`
    console.log(invitation);
 }
}}

console.log("Since we got a bigger dinner table, now we are inviting more friends");

guest.unshift("Wasaf");
guest.splice(2,0,"Waqas");
guest.push("Usman");

invitationFunction();
