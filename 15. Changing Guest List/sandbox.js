let guest = ["Asad", "Osama", "Saif"];
let notComing = "Saif";

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
}

console.log(notComing);