const discord = require('discord.js')
const Seonsa_Center = new discord.Client

Seonsa_Center.on("ready", () => {
    console.log('www.seonsacenter.com')
})

Seonsa_Center.once("message", msg => {

let flaggie = msg.author.flags
if (flaggie.any('PARTNERED_SERVER_OWNER')) {
   let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Rol ID Buraya Girin...')
    let TıG = msg.guild.member(member)

TıG. roles.add(partner)


} if (flaggie.any('DISCORD_EMPLOYEE')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Rol ID Buraya Girin...')
    let TıG = msg.guild.member(member)

TıG. roles.add(partner)

} if (flaggie.any('HYPESQUAD_EVENTS')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Rol ID Buraya Girin...')
    let TıG = msg.guild.member(member)

TıG. roles.add(partner)

}  if (flaggie.any('BUGHUNTER_LEVEL_1')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Rol ID Buraya Girin...')
    let TıG = msg.guild.member(member)

TıG. roles.add(partner)

}  if (flaggie.any('HOUSE_BRAVERY')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Rol ID Buraya Girin...')
    let TıG = msg.guild.member(member)

TıG. roles.add(partner)

}  if (flaggie.any('HOUSE_BRILLIANCE')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Rol ID Buraya Girin...')
    let TıG = msg.guild.member(member)

TıG. roles.add(partner)

}  if (flaggie.any('HOUSE_BALANCE')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Rol ID Buraya Girin...')
    let TıG = msg.guild.member(member)

TıG. roles.add(partner)

} if (flaggie.any('EARLY_SUPPORTER')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Rol ID Buraya Girin...')
    let TıG = msg.guild.member(member)

TıG. roles.add(partner)

} if (flaggie.any('TEAM_USER')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Rol ID Buraya Girin...')
    let TıG = msg.guild.member(member)

TıG. roles.add(partner)

} if (flaggie.any('BUGHUNTER_LEVEL_2')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Rol ID Buraya Girin...')
    let TıG = msg.guild.member(member)

TıG. roles.add(partner)

} if (flaggie.any('VERIFIED_DEVELOPER')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'Rol ID Buraya Girin...')
    let TıG = msg.guild.member(member)

TıG. roles.add(partner)

}

    }
 )

Seonsa_Center.login('token')
