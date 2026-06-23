const allData = [
    { negara: "Argentina", nilaiSkuad: 920, konfederasi: "CONMEBOL", stage: "Quarter-finals", pemainTerbaik: "Lautaro Martínez", club: "Inter Milan", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Lautaro+Martinez", statistik: { gol: 23, assist: 5, marketValue: 110 }, qualRecord: "11 Wins, 3 Draws, 2 Losses", qualTopScorer: "Lionel Messi (7 Goals)", trenKualifikasi: "Dominant qualifying run proving elite tactical stability and depth" },
    { negara: "Brasil", nilaiSkuad: 1100, konfederasi: "CONMEBOL", stage: "Finalists", pemainTerbaik: "Vinícius Júnior", club: "Real Madrid", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Vinicius+Junior", statistik: { gol: 19, assist: 9, marketValue: 180 }, qualRecord: "9 Wins, 4 Draws, 3 Losses", qualTopScorer: "Rodrygo (5 Goals)", trenKualifikasi: "High squad valuation correlates with peak conversion efficiency in big games" },
    { negara: "Uruguay", nilaiSkuad: 600, konfederasi: "CONMEBOL", stage: "Quarter-finals", pemainTerbaik: "Federico Valverde", club: "Real Madrid", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Federico+Valverde", statistik: { gol: 5, assist: 7, marketValue: 120 }, qualRecord: "9 Wins, 3 Draws, 4 Losses", qualTopScorer: "Darwin Núñez (5 Goals)", trenKualifikasi: "High-intensity press securing solid clean sheets against top tiers" },
    { negara: "Kolombia", nilaiSkuad: 450, konfederasi: "CONMEBOL", stage: "Round of 16", pemainTerbaik: "Luis Díaz", club: "Liverpool", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Luis+Diaz", statistik: { gol: 13, assist: 6, marketValue: 75 }, qualRecord: "8 Wins, 5 Draws, 3 Losses", qualTopScorer: "Luis Díaz (4 Goals)", trenKualifikasi: "Dangerous counter-attacking side utilizing elite winger productivity" },
    { negara: "Ekuador", nilaiSkuad: 300, konfederasi: "CONMEBOL", stage: "Round of 16", pemainTerbaik: "Moises Caicedo", club: "Chelsea", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Moises+Caicedo", statistik: { gol: 2, assist: 5, marketValue: 75 }, qualRecord: "7 Wins, 4 Draws, 5 Losses", qualTopScorer: "Félix Torres (3 Goals)", trenKualifikasi: "Physical dominance in midfield choking out lower-ranked oppositions" },
    { negara: "Paraguay", nilaiSkuad: 200, konfederasi: "CONMEBOL", stage: "Group Stage", pemainTerbaik: "Julio Enciso", club: "Brighton", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Julio+Enciso", statistik: { gol: 5, assist: 4, marketValue: 22 }, qualRecord: "5 Wins, 5 Draws, 6 Losses", qualTopScorer: "Antonio Sanabria (3 Goals)", trenKualifikasi: "Low-block defense but heavily limited by poor overall goal production" },
    { negara: "Chile", nilaiSkuad: 150, konfederasi: "CONMEBOL", stage: "Group Stage", pemainTerbaik: "Ben Brereton Díaz", club: "Southampton", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Ben+Brereton", statistik: { gol: 9, assist: 2, marketValue: 15 }, qualRecord: "4 Wins, 5 Draws, 7 Losses", qualTopScorer: "Eduardo Vargas (2 Goals)", trenKualifikasi: "Unstable transition phase causing severe defensive vulnerabilities" },
    { negara: "Peru", nilaiSkuad: 100, konfederasi: "CONMEBOL", stage: "Group Stage", pemainTerbaik: "Renato Tapia", club: "Leganes", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Renato+Tapia", statistik: { gol: 1, assist: 1, marketValue: 5 }, qualRecord: "3 Wins, 5 Draws, 8 Losses", qualTopScorer: "Edison Flores (2 Goals)", trenKualifikasi: "Low attacking conversion rate making group stage survival unlikely" },

    { negara: "Inggris", nilaiSkuad: 1300, konfederasi: "UEFA", stage: "Semi-finals", pemainTerbaik: "Jude Bellingham", club: "Real Madrid", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Jude+Bellingham", statistik: { gol: 14, assist: 10, marketValue: 180 }, qualRecord: "8 Wins, 2 Draws, 0 Losses", qualTopScorer: "Harry Kane (8 Goals)", trenKualifikasi: "Flawless qualifying run backed by the world's most valuable squad depth" },
    { negara: "Prancis", nilaiSkuad: 1250, konfederasi: "UEFA", stage: "Finalists", pemainTerbaik: "Kylian Mbappé", club: "Real Madrid", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Kylian+Mbappe", statistik: { gol: 28, assist: 7, marketValue: 180 }, qualRecord: "9 Wins, 1 Draw, 0 Losses", qualTopScorer: "Kylian Mbappé (9 Goals)", trenKualifikasi: "Elite win ratio directly powered by Mbappe's tournament-leading form" },
    { negara: "Portugal", nilaiSkuad: 1050, konfederasi: "UEFA", stage: "Semi-finals", pemainTerbaik: "Rafael Leão", club: "AC Milan", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Rafael+Leao", statistik: { gol: 12, assist: 9, marketValue: 90 }, qualRecord: "8 Wins, 1 Draw, 1 Loss", qualTopScorer: "Cristiano Ronaldo (7 Goals)", trenKualifikasi: "Devastating attacking variety averaging over three goals per qualifiers match" },
    { negara: "Spanyol", nilaiSkuad: 980, konfederasi: "UEFA", stage: "Quarter-finals", pemainTerbaik: "Lamine Yamal", club: "Barcelona", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Lamine+Yamal", statistik: { gol: 10, assist: 12, marketValue: 120 }, qualRecord: "7 Wins, 2 Draws, 1 Loss", qualTopScorer: "Álvaro Morata (5 Goals)", trenKualifikasi: "High possession metrics controlling games but lacks heavy physical presence" },
    { negara: "Jerman", nilaiSkuad: 880, konfederasi: "UEFA", stage: "Quarter-finals", pemainTerbaik: "Florian Wirtz", club: "Bayer Leverkusen", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Florian+Wirtz", statistik: { gol: 11, assist: 12, marketValue: 130 }, qualRecord: "7 Wins, 1 Draw, 2 Losses", qualTopScorer: "Kai Havertz (6 Goals)", trenKualifikasi: "Excellent structural play making them highly efficient in build-up phases" },
    { negara: "Belanda", nilaiSkuad: 820, konfederasi: "UEFA", stage: "Round of 16", pemainTerbaik: "Cody Gakpo", club: "Liverpool", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Cody+Gakpo", statistik: { gol: 12, assist: 6, marketValue: 55 }, qualRecord: "6 Wins, 2 Draws, 2 Losses", qualTopScorer: "Wout Weghorst (4 Goals)", trenKualifikasi: "Organized backline balancing out occasional slumps in front of goal" },
    { negara: "Swedia", nilaiSkuad: 400, konfederasi: "UEFA", stage: "Round of 16", pemainTerbaik: "Viktor Gyökeres", club: "Sporting CP", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Viktor+Gyokeres", statistik: { gol: 34, assist: 11, marketValue: 100 }, qualRecord: "6 Wins, 1 Draw, 3 Losses", qualTopScorer: "Viktor Gyökeres (8 Goals)", trenKualifikasi: "Phenomenal attacking output outperforming their overall squad market valuation" },
    { negara: "Belgia", nilaiSkuad: 680, konfederasi: "UEFA", stage: "Round of 16", pemainTerbaik: "Jérémy Doku", club: "Manchester City", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Jeremy+Doku", statistik: { gol: 6, assist: 8, marketValue: 65 }, qualRecord: "5 Wins, 3 Draws, 2 Losses", qualTopScorer: "Romelu Lukaku (5 Goals)", trenKualifikasi: "Heavy reliance on winger pace makes them lethal but easily predictable" },
    { negara: "Norwegia", nilaiSkuad: 500, konfederasi: "UEFA", stage: "Round of 16", pemainTerbaik: "Erling Haaland", club: "Manchester City", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Erling+Haaland", statistik: { gol: 31, assist: 5, marketValue: 180 }, qualRecord: "5 Wins, 2 Draws, 3 Losses", qualTopScorer: "Erling Haaland (7 Goals)", trenKualifikasi: "World-class strike power carrying the team through a brutal group stage" },
    { negara: "Denmark", nilaiSkuad: 450, konfederasi: "UEFA", stage: "Round of 16", pemainTerbaik: "Rasmus Højlund", club: "Manchester United", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Rasmus+Hojlund", statistik: { gol: 11, assist: 3, marketValue: 65 }, qualRecord: "5 Wins, 2 Draws, 3 Losses", qualTopScorer: "Rasmus Højlund (4 Goals)", trenKualifikasi: "Consistent home metrics showing consistency but struggles on away territory" },
    { negara: "Swiss", nilaiSkuad: 400, konfederasi: "UEFA", stage: "Round of 16", pemainTerbaik: "Manuel Akanji", club: "Manchester City", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Manuel+Akanji", statistik: { gol: 2, assist: 1, marketValue: 45 }, qualRecord: "4 Wins, 4 Draws, 2 Losses", qualTopScorer: "Zeki Amdouni (4 Goals)", trenKualifikasi: "Highly resilient tactical defensive block built for knockout upsets" },
    { negara: "Kroasia", nilaiSkuad: 350, konfederasi: "UEFA", stage: "Round of 16", pemainTerbaik: "Joško Gvardiol", club: "Manchester City", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Josko+Gvardiol", statistik: { gol: 4, assist: 2, marketValue: 75 }, qualRecord: "5 Wins, 2 Draws, 3 Losses", qualTopScorer: "Andrej Kramarić (4 Goals)", trenKualifikasi: "Aging midfield masterclass relying heavily on veteran tournament experience" },
    { negara: "Serbia", nilaiSkuad: 300, konfederasi: "UEFA", stage: "Group Stage", pemainTerbaik: "Dušan Vlahović", club: "Juventus", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Dusan+Vlahovic", statistik: { gol: 16, assist: 3, marketValue: 65 }, qualRecord: "4 Wins, 3 Draws, 3 Losses", qualTopScorer: "Aleksandar Mitrović (5 Goals)", trenKualifikasi: "Dangerous aerial threat but lacks lateral agility in open-field transition" },
    { negara: "Ukraina", nilaiSkuad: 280, konfederasi: "UEFA", stage: "Group Stage", pemainTerbaik: "Artem Dovbyk", club: "AS Roma", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Artem+Dovbyk", statistik: { gol: 14, assist: 4, marketValue: 35 }, qualRecord: "4 Wins, 2 Draws, 4 Losses", qualTopScorer: "Viktor Tsyhankov (3 Goals)", trenKualifikasi: "High emotional and physical grit but heavily prone to tracking errors" },
    { negara: "Turki", nilaiSkuad: 270, konfederasi: "UEFA", stage: "Group Stage", pemainTerbaik: "Arda Güler", club: "Real Madrid", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Arda+Guler", statistik: { gol: 6, assist: 5, marketValue: 45 }, qualRecord: "4 Wins, 3 Draws, 3 Losses", qualTopScorer: "Kerem Aktürkoğlu (3 Goals)", trenKualifikasi: "Exciting young attacking options undermined by structural defensive gaps" },
    { negara: "Austria", nilaiSkuad: 260, konfederasi: "UEFA", stage: "Group Stage", pemainTerbaik: "Marcel Sabitzer", club: "Borussia Dortmund", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Marcel+Sabitzer", statistik: { gol: 6, assist: 5, marketValue: 20 }, qualRecord: "4 Wins, 2 Draws, 4 Losses", qualTopScorer: "Michael Gregoritsch (3 Goals)", trenKualifikasi: "Intense high-pressing style that burns out across a long tournament format" },

    { negara: "Amerika Serikat", nilaiSkuad: 550, konfederasi: "CONCACAF", stage: "Round of 16", pemainTerbaik: "Christian Pulisic", club: "AC Milan", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Christian+Pulisic", statistik: { gol: 12, assist: 8, marketValue: 40 }, qualRecord: "Host (Auto-Qualified)", qualTopScorer: "None (No Qualifiers)", trenKualifikasi: "Lack of competitive qualifiers makes team synergy untested under heavy pressure" },
    { negara: "Meksiko", nilaiSkuad: 300, konfederasi: "CONCACAF", stage: "Round of 16", pemainTerbaik: "Santiago Giménez", club: "Feyenoord", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Santiago+Gimenez", statistik: { gol: 15, assist: 4, marketValue: 40 }, qualRecord: "Host (Auto-Qualified)", qualTopScorer: "None (No Qualifiers)", trenKualifikasi: "Home advantage provides major boost despite uneven friendly match forms" },
    { negara: "Kanada", nilaiSkuad: 250, konfederasi: "CONCACAF", stage: "Group Stage", pemainTerbaik: "Jonathan David", club: "Lille", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Jonathan+David", statistik: { gol: 18, assist: 5, marketValue: 50 }, qualRecord: "Host (Auto-Qualified)", qualTopScorer: "None (No Qualifiers)", trenKualifikasi: "Highly reliant on individual club form to sustain group stage survival" },
    { negara: "Jamaika", nilaiSkuad: 100, konfederasi: "CONCACAF", stage: "Group Stage", pemainTerbaik: "Leon Bailey", club: "Aston Villa", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Leon+Bailey", statistik: { gol: 8, assist: 7, marketValue: 35 }, qualRecord: "6 Wins, 2 Draws, 2 Losses", qualTopScorer: "Shamar Nicholson (5 Goals)", trenKualifikasi: "Strong physical profile but severely lacks deep defensive coordination" },
    { negara: "Kosta Rika", nilaiSkuad: 80, konfederasi: "CONCACAF", stage: "Group Stage", pemainTerbaik: "Manfred Ugalde", club: "Spartak Moscow", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Manfred+Ugalde", statistik: { gol: 7, assist: 3, marketValue: 8 }, qualRecord: "5 Wins, 3 Draws, 2 Losses", qualTopScorer: "Manfred Ugalde (3 Goals)", trenKualifikasi: "Decent qualification run but lacks quality depth to fight elite nations" },
    { negara: "Panama", nilaiSkuad: 50, konfederasi: "CONCACAF", stage: "Group Stage", pemainTerbaik: "Adalberto Carrasquilla", club: "Houston Dynamo", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Adalberto+Carrasquilla", statistik: { gol: 3, assist: 4, marketValue: 4 }, qualRecord: "5 Wins, 2 Draws, 3 Losses", qualTopScorer: "Cecilio Waterman (3 Goals)", trenKualifikasi: "Hardworking central midfield engine but highly limited up front" },

    { negara: "Maroko", nilaiSkuad: 350, konfederasi: "CAF", stage: "Quarter-finals", pemainTerbaik: "Achraf Hakimi", club: "PSG", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Achraf+Hakimi", statistik: { gol: 4, assist: 6, marketValue: 60 }, qualRecord: "7 Wins, 1 Draw, 0 Losses", qualTopScorer: "Ayoub El Kaabi (5 Goals)", trenKualifikasi: "Best African metrics showing flawless tactical organization on all areas" },
    { negara: "Nigeria", nilaiSkuad: 300, konfederasi: "CAF", stage: "Round of 16", pemainTerbaik: "Victor Osimhen", club: "Galatasaray", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Victor+Osimhen", statistik: { gol: 14, assist: 3, marketValue: 100 }, qualRecord: "5 Wins, 3 Draws, 0 Losses", qualTopScorer: "Victor Osimhen (4 Goals)", trenKualifikasi: "Explosive frontline depth easily terrorizing standard group formations" },
    { negara: "Pantai Gading", nilaiSkuad: 250, konfederasi: "CAF", stage: "Round of 16", pemainTerbaik: "Simon Adingra", club: "Brighton", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Simon+Adingra", statistik: { gol: 7, assist: 5, marketValue: 30 }, qualRecord: "5 Wins, 2 Draws, 1 Loss", qualTopScorer: "Seko Fofana (3 Goals)", trenKualifikasi: "Balanced continental champions managing match tempos perfectly" },
    { negara: "Senegal", nilaiSkuad: 200, konfederasi: "CAF", stage: "Group Stage", pemainTerbaik: "Nicolas Jackson", club: "Chelsea", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Nicolas+Jackson", statistik: { gol: 13, assist: 4, marketValue: 40 }, qualRecord: "4 Wins, 4 Draws, 0 Losses", qualTopScorer: "Sadio Mané (3 Goals)", trenKualifikasi: "Great physical power but displays notable deceleration in tactical phases" },
    { negara: "Ghana", nilaiSkuad: 150, konfederasi: "CAF", stage: "Group Stage", pemainTerbaik: "Mohammed Kudus", club: "West Ham", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Mohammed+Kudus", statistik: { gol: 10, assist: 5, marketValue: 50 }, qualRecord: "4 Wins, 2 Draws, 2 Losses", qualTopScorer: "Jordan Ayew (3 Goals)", trenKualifikasi: "Relying on isolation plays that get blocked by disciplined defenses" },
    { negara: "Kamerun", nilaiSkuad: 120, konfederasi: "CAF", stage: "Group Stage", pemainTerbaik: "Bryan Mbeumo", club: "Brentford", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Bryan+Mbeumo", statistik: { gol: 9, assist: 6, marketValue: 40 }, qualRecord: "4 Wins, 3 Draws, 1 Loss", qualTopScorer: "Vincent Aboubakar (3 Goals)", trenKualifikasi: "Veteran core provides experience but lacks transition speed on turnovers" },
    { negara: "Mesir", nilaiSkuad: 100, konfederasi: "CAF", stage: "Group Stage", pemainTerbaik: "Mohamed Salah", club: "Liverpool", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Mohamed+Salah", statistik: { gol: 18, assist: 11, marketValue: 55 }, qualRecord: "5 Wins, 3 Draws, 0 Losses", qualTopScorer: "Mohamed Salah (5 Goals)", trenKualifikasi: "Severe dependency on single star player makes them incredibly easy to isolate" },
    { negara: "Aljazair", nilaiSkuad: 90, konfederasi: "CAF", stage: "Group Stage", pemainTerbaik: "Amine Gouiri", club: "Rennes", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Amine+Gouiri", statistik: { gol: 8, assist: 3, marketValue: 25 }, qualRecord: "5 Wins, 1 Draw, 2 Losses", qualTopScorer: "Baghdad Bounedjah (3 Goals)", trenKualifikasi: "High-risk offensive commitments leaving wide gaps in structural coverage" },
    { negara: "Mali", nilaiSkuad: 80, konfederasi: "CAF", stage: "Group Stage", pemainTerbaik: "Yves Bissouma", club: "Tottenham", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Yves+Bissouma", statistik: { gol: 1, assist: 2, marketValue: 35 }, qualRecord: "4 Wins, 2 Draws, 2 Losses", qualTopScorer: "Kamory Doumbia (3 Goals)", trenKualifikasi: "Good ball retention mechanics but deeply lacks creative penetration up front" },

    { negara: "Jepang", nilaiSkuad: 350, konfederasi: "AFC", stage: "Quarter-finals", pemainTerbaik: "Takefusa Kubo", club: "Real Sociedad", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Takefusa+Kubo", statistik: { gol: 8, assist: 7, marketValue: 50 }, qualRecord: "8 Wins, 1 Draw, 1 Loss", qualTopScorer: "Ayase Ueda (8 Goals)", trenKualifikasi: "Best tactical consistency in Asia showcasing high fluid attacking combinations" },
    { negara: "Korea Selatan", nilaiSkuad: 300, konfederasi: "AFC", stage: "Round of 16", pemainTerbaik: "Son Heung-min", club: "Tottenham", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Son+Heung+Min", statistik: { gol: 11, assist: 6, marketValue: 45 }, qualRecord: "7 Wins, 2 Draws, 1 Loss", qualTopScorer: "Son Heung-min (7 Goals)", trenKualifikasi: "Rapid horizontal transitions but suffers from occasional lack of physical presence" },
    { negara: "Iran", nilaiSkuad: 150, konfederasi: "AFC", stage: "Group Stage", pemainTerbaik: "Mehdi Taremi", club: "Inter Milan", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Mehdi+Taremi", statistik: { gol: 8, assist: 4, marketValue: 10 }, qualRecord: "6 Wins, 3 Draws, 1 Loss", qualTopScorer: "Mehdi Taremi (6 Goals)", trenKualifikasi: "Highly robust physical game but easily outpaced by dynamic European setups" },
    { negara: "Australia", nilaiSkuad: 120, konfederasi: "AFC", stage: "Group Stage", pemainTerbaik: "Nestory Irankunda", club: "Bayern Munich", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Nestory+Irankunda", statistik: { gol: 5, assist: 4, marketValue: 15 }, qualRecord: "6 Wins, 2 Draws, 2 Losses", qualTopScorer: "Kusini Yengi (4 Goals)", trenKualifikasi: "Heavily reliant on set-pieces with notable vulnerability in open possession" },
    { negara: "Arab Saudi", nilaiSkuad: 100, konfederasi: "AFC", stage: "Group Stage", pemainTerbaik: "Firas Al-Buraikan", club: "Al-Ahli", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Firas+Al+Buraikan", statistik: { gol: 11, assist: 3, marketValue: 6 }, qualRecord: "5 Wins, 2 Draws, 3 Losses", qualTopScorer: "Saleh Al-Shehri (4 Goals)", trenKualifikasi: "Struggles significantly away from home conditions when tempo gets accelerated" },
    { negara: "Uzbekistan", nilaiSkuad: 80, konfederasi: "AFC", stage: "Group Stage", pemainTerbaik: "Abdukodir Khusanov", club: "Lens", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Abdukodir+Khusanov", statistik: { gol: 0, assist: 1, marketValue: 15 }, qualRecord: "5 Wins, 3 Draws, 2 Losses", qualTopScorer: "Oston Urunov (3 Goals)", trenKualifikasi: "Impressive structural shape but heavily struggles under sustained attacking pressure" },
    { negara: "Qatar", nilaiSkuad: 60, konfederasi: "AFC", stage: "Group Stage", pemainTerbaik: "Akram Afif", club: "Al-Sadd", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Akram+Afif", statistik: { gol: 14, assist: 9, marketValue: 6 }, qualRecord: "5 Wins, 2 Draws, 3 Losses", qualTopScorer: "Almoez Ali (7 Goals)", trenKualifikasi: "High technical skill in slow tempos but collapses under quick defensive press" },
    { negara: "Irak", nilaiSkuad: 50, konfederasi: "AFC", stage: "Group Stage", pemainTerbaik: "Aymen Hussein", club: "Al-Khor", fotoPemain: "https://api.dicebear.com/7.x/initials/svg?seed=Aymen+Hussein", statistik: { gol: 12, assist: 1, marketValue: 4 }, qualRecord: "5 Wins, 1 Draw, 4 Losses", qualTopScorer: "Aymen Hussein (5 Goals)", trenKualifikasi: "Relies entirely on direct long ball service which is easily intercepted by top tiers" }
];

let worldCupChart;

function initChart(data) {
    const ctx = document.getElementById('barChart').getContext('2d');
    
    worldCupChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(item => item.negara),
            datasets: [{
                label: 'Squad Market Value (in Million Euro)',
                data: data.map(item => item.nilaiSkuad),
                backgroundColor: 'rgba(49, 130, 206, 0.6)',
                borderColor: 'rgba(49, 130, 206, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            onHover: (event, activeElements) => {
                if (activeElements.length > 0) {
                    const index = activeElements[0].index;
                    const negaraAktif = worldCupChart.data.labels[index];
                    const selectedObject = allData.find(d => d.negara === negaraAktif);

                    if (selectedObject) {
                        document.getElementById('player-photo').src = selectedObject.fotoPemain;
                        document.getElementById('player-name').innerText = `${selectedObject.pemainTerbaik} (${selectedObject.club})`;
                        document.getElementById('player-detail').innerText = `Market Value: €${selectedObject.statistik.marketValue}M | Stats: ${selectedObject.statistik.gol} Goals, ${selectedObject.statistik.assist} Assists | Qualifiers Result: ${selectedObject.qualRecord} | Qualifiers Top Scorer: ${selectedObject.qualTopScorer} | Projection: ${selectedObject.stage} | Analysis: ${selectedObject.trenKualifikasi}`;
                    }
                }
            },
            plugins: {
                tooltip: {
                    enabled: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Market Value (Million €)' }
                }
            }
        }
    });
}

function filterData() {
    const nilaiFilter = document.getElementById('filterKonfederasi').value;
    let filteredData = allData;
    
    if (["UEFA", "CONMEBOL", "CONCACAF", "CAF", "AFC"].includes(nilaiFilter)) {
        filteredData = allData.filter(item => item.konfederasi === nilaiFilter);
    } else if (nilaiFilter !== "Semua") {
        filteredData = allData.filter(item => item.stage === nilaiFilter);
    }

    worldCupChart.data.labels = filteredData.map(item => item.negara);
    worldCupChart.data.datasets[0].data = filteredData.map(item => item.nilaiSkuad);
    worldCupChart.update();
}

window.onload = function() {
    initChart(allData);
};