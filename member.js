function skillsMember(){
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var contact = document.getElementById("contact");
    var memberBtn = document.getElementById("member-btn");
    var skillsBtn = document.getElementById("skills-btn");
    var contactBtn = document.getElementById("contact-btn");
    member.style.display = "block";
    skills.style.display = "none";
    contact.style.display = "none";
    memberBtn.style.backgroundColor = "#4CAF50";
    skillsBtn.style.backgroundColor = "#333";
    contactBtn.style.backgroundColor = "#333";
}