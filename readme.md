# EpicSeven Gear Crafting

<img align=right src="https://play-lh.googleusercontent.com/LPRg62C_8Hp7_HlTDlPmUNSY-cuHd54UZqyTEojHK8negGRSMLeX1U5aqNiY0pqG4A" height="200px">

<br/>
<br/>
    <h3 align="center">"Use it to craft stuff on seven epics idk never played the game"</h3>
    <h4 align="right">- Lama, Dalai</h4>
<br/>
<br/>
<br/>

Speedrun with [Sahekera Maluco](https://github.com/CondeSaheki/EpicSeven-Gear-Crafting), no winners were announced, we both lost.

## Setup

### Running it locally

1. Create a folder called `src`
2. put the JSON there;
    - `dados.json` is the expected name;

3. Download Node v16 or newer;
4. Run `npm run build` to build the JavaScript files;
5. Run the JavaScript files with `npm run dev`;

### Downloading the executable for Linux or Windows

1. Head to the [releases page](https://github.com/FelipeSSDev/epicseven-gear-crafting/tags) and select the newest version from there.
2. Create a folder called `src`
3. put the JSON there;
    - `dados.json` is the expected name;
4. Run the executable, a server will start on port 3000.

## How to use


### Filtering itens and sets
Send an object to the route `/` with the following structure

```json
{
    "setName": "Velocidade",
    "armorItem": "Colar",
    "substats": ["Velocidade","RES","DEF%"],
    "mainStat": "HP%"
}
```

`mainStat` is optional for items that have a fixed mainStat
