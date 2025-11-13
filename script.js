// NOA Genesis キャンペーン応募者の声サイト - JavaScript

// ===== サンプルデータ =====
const voicesData = [
    {
        id: 1,
        name: "すーみん",
        date: "一番の推しはベール",
        comment: "あけじーさんの描く作品がめちゃくちゃ好きです。好きすぎてアクスタやカレンダーも作っちゃいました。",
        illustration: "IMG_6203.jpg",
        avatar: "す"
    },
    {
        id: 2,
        name: "アースキー🌎🔑AI❎薬剤師💊",
        date: "箱推しであり　のあ推し！",
        comment: "このNinjaOtomeとあって　久しぶりにマンガの楽しさに気づくことができました！そしてNFTを保有数さ楽しさを学び、NinjaDAOでのコミュニティー活動がより一層楽しくなりました。実際にあけじーさん御夫婦とお会いできたこと。そして、CNPお薬手帳にもあけじーさんのデザインが使われることで、CNPとあけじーさんの両方を広める手助けが1人の薬剤師としてできそうです💊これからも、あけじーさんのご活用を陰ながら見守っております😆",
        illustration: "IMG_6202.jpg",
        avatar: "ア"
    },
    {
        id: 3,
        name: "IPPEI⚽️｜日本\"初\"元ｻｯｶｰ選手でNFT購入🇯🇵",
        date: "のあ🐺",
        comment: "いつか自分の保有しているNFTのフィギュアがほし…⚓️🥹*",
        illustration: "IMG_6200.jpg",
        avatar: "I"
    },
    {
        id: 4,
        name: "たえみ｜taemi",
        date: "💕全員",
        comment: "どの子も可愛くて、表情豊か・個性的！あけじーさんのイラストはうますぎ、コミュニティのあけサファは優しく温かい場所です！応援しています！",
        illustration: "IMG_6201.jpg",
        avatar: "た"
    },
    {
        id: 5,
        name: "ジュニア",
        date: "ベール🐑",
        comment: "完売前にせめてもう一体お迎えしたいです😄",
        illustration: "IMG_6228.jpg",
        avatar: "ジ"
    },
    {
        id: 6,
        name: "mecha bito 💯 めちゃびっと 傾奇豚(忍)|CNPR2期|bakuzan",
        date: "ベール",
        comment: "NOAプロジェクト陰ながら応援してます📣\nまたお迎えできるよう頑張ります✨",
        illustration: "IMG_6300.webp",
        avatar: "m"
    },
    {
        id: 7,
        name: "みーちゃん✌️🏻 𝒫",
        date: "おとちゃん🐰",
        comment: "今回CNPプリンスのマスコット🐍のおかげで初めてお迎えできました😊\n\nいつも素敵な作品をポストにupしてくれる、あけじーさん\nこれからも楽しみにしています🥰",
        illustration: "IMG_6688.webp",
        avatar: "み"
    },
    {
        id: 8,
        name: "ヤス",
        date: "セス",
        comment: "販売終了までもう少し\n頑張ってください❗️",
        illustration: "IMG_6727.webp",
        avatar: "ヤ"
    },
    {
        id: 9,
        name: "7u1(ﾅｳｲ)",
        date: "アイリです🕳️",
        comment: "アイリはもちろんですが、どのキャラクターも本当に魅力的で、毎回ワクワクしながら楽しませてもらっていました✨\nNOA genesisが終わってしまうのは寂しいですが、次の挑戦を楽しみにしています🌱",
        illustration: "IMG_7024.webp",
        avatar: "7"
    },
    {
        id: 10,
        name: "neigura(ネイグラ)",
        date: "箱推し（タイプの違う子たちが一緒にいつつ、それぞれでらしさを発揮しているのが好きなのです）",
        comment: "NOA Genesis販売も残りわずか！最後までガンバです！\nその後の活動も応援してます！好きです！！",
        illustration: "IMG_7089.webp",
        avatar: "n"
    },
    {
        id: 11,
        name: "MIST 💎",
        date: "メイド＋セス様です💎",
        comment: "おくすり手帳持ってなくていつも「持ってますか？」「持ってません」のやりとりをしてるのを思い出しました🤣",
        illustration: "IMG_7104.webp",
        avatar: "M"
    },
    {
        id: 12,
        name: "人生の旅人 たくみさん🌟初代移住DAOファウンダー(鳥取県佐治地区)",
        date: "セス",
        comment: "初期から見ていたけど、自分の好きなキャラが結構逃して手に入れられなかったwww\n\n最近ヒロに推しキャラが変わりつつあるｗｗ。",
        illustration: "IMG_7176.webp",
        avatar: "人"
    },
    {
        id: 13,
        name: "なべっち",
        date: "箱推し",
        comment: "NOA Genesisのお陰で経験したことのない\n時の流れを味わうことができました✨\nイケハヤさんの仰るように、新しい体験\nこそ生きる醍醐味✨\n７７７日のチャレンジが伝説に🌈",
        illustration: "IMG_7177.webp",
        avatar: "な"
    },
    {
        id: 14,
        name: "ちょびすけ＠AI音楽生成を楽しんでます",
        date: "ヒロちゃん（可愛い！）",
        comment: "あけじーさんへ\nNOA Genesis完売おめでとうございます🎉\n１日１点 777点すごいです\nこれからも応援しています💪",
        illustration: "IMG_7247.webp",
        avatar: "ち"
    },
    {
        id: 15,
        name: "チャン嫁🇯🇵Kawaiichanyome",
        date: "アイリ",
        comment: "この度はNOA完売おめでとうございます㊗️🎉今日はどの子かな？この組み合わせ可愛い！と毎日楽しみでした😊お疲れ様でした！！",
        illustration: "IMG_7245.webp",
        avatar: "チ"
    },
    {
        id: 16,
        name: "だんく｜クリプトニンジャ最新情報",
        date: "みんな好きですけど、あえて絞るならアイリかな。",
        comment: "NOAついに777点完売しましたね。\n本当におめでとうございます🎉\n\n完売までたどりつくことができたのはプロジェクトを支える皆さん、そしてあけじーさん達の頑張りだと思います。本当に素敵です。そして、おつかれさまでした✨👏\n\n私も1人のNOAファンとして、これからも応援してきます！\nNOAがもっと多くの人に知られて、羽ばたいていけますように💖",
        illustration: "IMG_7246.webp",
        avatar: "だ"
    },
    {
        id: 17,
        name: "こたえっくす🐙凪紗トークン",
        date: "のあ",
        comment: "NOA本当にお疲れ様です！＆完売おめでとうございます！🥳🥳🥳\nみんな可愛くて、のあとひろとセス様で迷いましたが、やはりのあちゃんで！\nサバサバしててまっすぐで主人公感あって好きです😊✨\n（といいつつGETしたのは宇迦ちゃんですがｗ）",
        illustration: "IMG_7256.webp",
        avatar: "こ"
    },
    {
        id: 18,
        name: "すみ",
        date: "箱推し どの子も可愛くてキャラが魅力的",
        comment: "完売おめでとうございます🥳\n私は古参ではありませんが、純粋に可愛くて惹かれました😳\nご夫婦が描かれる漫画やイラストもキャラたちの個性が溢れていて、益々好きになりました😍",
        illustration: "IMG_7271.webp",
        avatar: "す"
    }
];

// 追加のサンプルデータ（もっと見る用）
const additionalVoicesData = [
    // 追加データは現在なし
];

// ===== DOM要素の取得 =====
let currentDisplayedVoices = 0;
const voicesPerLoad = voicesData.length; // 全てのデータを一度に表示
let allVoices = [...voicesData];

// ===== 初期化 =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌟 NOA Genesis キャンペーン応募者の声サイトが読み込まれました！');
    
    // 初期コンテンツの読み込み
    loadInitialVoices();
    
    // イベントリスナーの設定
    setupEventListeners();
    
    // アニメーションの初期化
    initializeAnimations();
    
    // 統計カウンターの開始
    setTimeout(startCounterAnimation, 1000);
    
    // スクロールアニメーションの監視開始
    observeScrollAnimations();
});

// ===== 初期の応募者の声を読み込み =====
function loadInitialVoices() {
    const voicesGrid = document.getElementById('voices-grid');
    if (!voicesGrid) return;
    
    const initialVoices = allVoices; // 全てのデータを表示
    currentDisplayedVoices = allVoices.length;
    
    initialVoices.forEach((voice, index) => {
        const voiceCard = createVoiceCard(voice, index);
        
        // 最新の投稿（最後の投稿）にIDを追加
        if (index === initialVoices.length - 1) {
            voiceCard.id = 'latest-voice';
        }
        
        voicesGrid.appendChild(voiceCard);
    });
    
    // もっと見るボタンは削除済みのため、この処理は不要
    // updateLoadMoreButton();
}

// ===== 画像別キャラクター判定関数 =====
function getCharacterFromImage(illustration) {
    if (!illustration) return null;
    
    // 画像ファイル名からキャラクターを判定
    const imageCharacterMap = {
        'IMG_6200.jpg': 'noa',      // Noa Sailor Uniform2 #716
        'IMG_6201.jpg': 'uka',      // Uka Blazer Tie2b #691
        'IMG_6202.jpg': 'noa',      // Noa Plaid Short Sleeve3 #490
        'IMG_6203.jpg': 'airi',     // Iris Sailor Suit2 #004
        'IMG_6228.jpg': 'veil',     // Belle Enter Hoodie1 #462
        'IMG_6300.webp': 'veil',    // Belle In Hoodie1 #695
        'IMG_6727.webp': 'seth',    // Ces Blazer Tie Short Sleeve1a
        'IMG_7024.webp': 'airi',    // アイリ推しの7u1さんの画像
        'IMG_7089.webp': 'veil',    // ベール色で表示するneiguraさんの画像
        'IMG_7104.webp': 'seth',    // セス推しのMIST💎さんの画像
        'IMG_7176.webp': 'airi',    // アイリ色で表示するたくみさんの画像
        'IMG_7177.webp': 'uka',     // ウカ色で表示するなべっちさんの画像
        'IMG_7247.webp': 'noa',     // のあ色で表示するちょびすけさんの画像
        'IMG_7245.webp': 'uka',     // ウカ色で表示するチャン嫁さんの画像
        'IMG_7246.webp': 'airi',    // アイリ色で表示するだんくさんの画像
        'IMG_7256.webp': 'uka',     // ウカ色で表示するこたえっくすさんの画像
        'IMG_7271.webp': 'noa'      // のあ色で表示するすみさんの画像
    };
    
    return imageCharacterMap[illustration] || null;
}

// ===== キャラクター色判定関数 =====
function getCharacterColorClass(voice) {
    // まず画像からキャラクターを判定
    const imageCharacter = getCharacterFromImage(voice.illustration);
    if (imageCharacter) {
        return `${imageCharacter}-voice-card`;
    }
    
    // 画像がない場合は推しキャラ情報から判定
    const lowerText = voice.date.toLowerCase();
    
    if (lowerText.includes('のあ') || lowerText.includes('noa')) {
        return 'noa-voice-card';
    } else if (lowerText.includes('セス') || lowerText.includes('せす') || lowerText.includes('seth')) {
        return 'seth-voice-card';
    } else if (lowerText.includes('ベール') || lowerText.includes('べーる') || lowerText.includes('veil')) {
        return 'veil-voice-card';
    } else if (lowerText.includes('アイリ') || lowerText.includes('あいり') || lowerText.includes('airi')) {
        return 'airi-voice-card';
    } else if (lowerText.includes('ヒロ') || lowerText.includes('ひろ') || lowerText.includes('hiro')) {
        return 'hiro-voice-card';
    } else if (lowerText.includes('うか') || lowerText.includes('ウカ') || lowerText.includes('uka')) {
        return 'uka-voice-card';
    } else if (lowerText.includes('おと') || lowerText.includes('オト') || lowerText.includes('oto')) {
        return 'oto-voice-card';
    } else if (lowerText.includes('全員') || lowerText.includes('箱推し')) {
        return 'all-voice-card';
    }
    
    return 'default-voice-card';
}

// ===== 応募者カードの作成 =====
function createVoiceCard(voice, index) {
    const card = document.createElement('div');
    const characterColorClass = getCharacterColorClass(voice);
    card.className = `voice-card fade-in ${characterColorClass}`;
    card.style.animationDelay = `${index * 0.1}s`;
    
    const commentId = `comment-${voice.id}`;
    const toggleId = `toggle-${voice.id}`;
    
    card.innerHTML = `
        <div class="voice-header">
            <div class="voice-avatar">${voice.avatar}</div>
            <div class="voice-info">
                <h3>${voice.name}</h3>
                <div class="voice-date">${voice.date}</div>
            </div>
        </div>
        <div class="voice-illustration">
            ${voice.illustration ? 
                `<img src="${voice.illustration}" alt="${voice.name}のイラスト" loading="lazy">` :
                `<div class="illustration-placeholder">
                    <i class="fas fa-palette"></i>
                </div>`
            }
        </div>
        <button class="comment-toggle" id="${toggleId}" onclick="toggleComment('${commentId}', '${toggleId}')" title="コメントを見る">
            <i class="fas fa-comment"></i>
        </button>
        <div class="voice-comment collapsed" id="${commentId}">
            ${voice.comment}
        </div>
    `;
    
    return card;
}

// ===== イベントリスナーの設定 =====
function setupEventListeners() {
    // もっと見るボタンは削除済みのため、この処理は不要
    // const loadMoreBtn = document.getElementById('load-more-btn');
    // if (loadMoreBtn) {
    //     loadMoreBtn.addEventListener('click', loadMoreVoices);
    // }
    
    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const targetPosition = target.offsetTop - 100;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== もっと見る機能 =====
function loadMoreVoices() {
    const voicesGrid = document.getElementById('voices-grid');
    if (!voicesGrid) return;
    
    // 追加データを全体データに追加（初回のみ）
    if (allVoices.length === voicesData.length) {
        allVoices = [...voicesData, ...additionalVoicesData];
    }
    
    const remainingVoices = allVoices.slice(currentDisplayedVoices, currentDisplayedVoices + voicesPerLoad);
    
    remainingVoices.forEach((voice, index) => {
        setTimeout(() => {
            const voiceCard = createVoiceCard(voice, index);
            voicesGrid.appendChild(voiceCard);
            
            // アニメーション開始
            setTimeout(() => {
                voiceCard.classList.add('visible');
            }, 100);
        }, index * 100);
    });
    
    currentDisplayedVoices += remainingVoices.length;
    
    // もっと見るボタンの表示制御
    updateLoadMoreButton();
}

// ===== もっと見るボタンの表示制御 =====
function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (!loadMoreBtn) return;
    
    if (currentDisplayedVoices >= allVoices.length + additionalVoicesData.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'flex';
    }
}

// ===== アニメーションの初期化 =====
function initializeAnimations() {
    // 初期表示のカードにアニメーションクラスを追加
    setTimeout(() => {
        const voiceCards = document.querySelectorAll('.voice-card');
        voiceCards.forEach(card => {
            card.classList.add('visible');
        });
    }, 300);
}

// ===== 統計カウンターアニメーション =====
function startCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2秒
        const step = target / (duration / 16); // 60FPS
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 16);
    });
}

// ===== スクロールアニメーションの監視 =====
function observeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // 統計セクションが表示されたらカウンターを開始
                if (entry.target.classList.contains('stats-section')) {
                    startCounterAnimation();
                }
            }
        });
    }, observerOptions);
    
    // 監視対象の要素
    const animatedElements = document.querySelectorAll(
        '.stats-section, .thank-you-section, .voice-card'
    );
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ===== ユーティリティ関数 =====

// デバウンス関数
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// スロットル関数
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== パフォーマンス監視 =====
if ('performance' in window) {
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`📊 NOA Genesis サイトの読み込み時間: ${loadTime}ms`);
    });
}

// ===== エラーハンドリング =====
window.addEventListener('error', function(e) {
    console.error('🚨 NOA Genesis サイトでエラーが発生しました:', e);
});

// ===== リサイズ時の処理 =====
let resizeTimer;
window.addEventListener('resize', debounce(function() {
    console.log('📱 画面サイズが変更されました:', window.innerWidth, 'x', window.innerHeight);
    
    // レスポンシブ対応の再計算が必要な場合はここに追加
}, 250));

// ===== コメントの展開/折りたたみ機能 =====
function toggleComment(commentId, toggleId) {
    const comment = document.getElementById(commentId);
    const toggle = document.getElementById(toggleId);
    
    if (!comment || !toggle) return;
    
    const isCollapsed = comment.classList.contains('collapsed');
    
    if (isCollapsed) {
        // 展開
        comment.classList.remove('collapsed');
        comment.classList.add('expanded');
        toggle.classList.add('expanded');
        toggle.innerHTML = '<i class="fas fa-times"></i>';
        toggle.title = 'コメントを閉じる';
    } else {
        // 折りたたみ
        comment.classList.remove('expanded');
        comment.classList.add('collapsed');
        toggle.classList.remove('expanded');
        toggle.innerHTML = '<i class="fas fa-comment"></i>';
        toggle.title = 'コメントを見る';
    }
}

// ===== 画像の遅延読み込み =====
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ===== アクセシビリティ強化 =====
function enhanceAccessibility() {
    // フォーカス可能な要素のフォーカス表示を強化
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '3px solid var(--primary-warm)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
}

// ===== ダークモード検出 =====
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('🌙 ダークモードが検出されました');
    // ダークモード対応が必要な場合はここに実装
}

// ===== 初期化完了ログ =====
console.log('✨ NOA Genesis キャンペーン応募者の声サイトの初期化が完了しました！');
console.log('💖 温かい想いをお届けします');

// ===== 開発用ヘルパー関数 =====
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // 開発環境でのみ実行される関数
    window.addTestVoice = function(name, comment) {
        const testVoice = {
            id: Date.now(),
            name: name || 'テストユーザー',
            date: new Date().toLocaleDateString('ja-JP'),
            comment: comment || 'テスト用のコメントです。',
            illustration: null,
            avatar: name ? name.charAt(0) : 'テ'
        };
        
        const voicesGrid = document.getElementById('voices-grid');
        if (voicesGrid) {
            const voiceCard = createVoiceCard(testVoice, 0);
            voicesGrid.appendChild(voiceCard);
            voiceCard.classList.add('visible');
        }
    };
    
    console.log('🔧 開発モード: window.addTestVoice() 関数が利用可能です');
}