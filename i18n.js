// ============================================================
//  共享 i18n 国际化模块
//  支持: zh / zh-tw / en / ja
//  用法: <script src="i18n.js"></script> 后调用 initI18n()
//  HTML 元素加 data-i18n="key" 即可自动翻译
//  JS 动态文本用 t('key') 获取翻译
// ============================================================

const I18N = {
    'zh': {
        // 通用
        siteTitle: 'ぼりんの网站', sidebarTitle: 'ぼりんの菜单',
        menuBilibili: 'B站热门视频', menuPost: '帖子动态', menuSettings: '设置', menuAbout: '关于我们',
        moreSoon: '更多功能开发中...', backHome: '返回首页', loading: '加载中...',
        beijingTime: '北京时间：', justNow: '刚刚', monthsAgo: '个月前', daysAgo: '天前', hoursAgo: '小时前', minutesAgo: '分钟前',
        // index.html
        welcomeText: '欢迎来到ぼりんの网站！', subText: 'ぼりん•ボリンの勾石网站',
        cardBilibiliTitle: 'B站热门视频', cardBilibiliDesc: '查看B站热门视频排行',
        cardPostTitle: '帖子动态', cardPostDesc: '浏览和发布帖子',
        cardSettingsTitle: '设置', cardSettingsDesc: '自定义网站主题和偏好',
        cardAboutTitle: '关于我们', cardAboutDesc: '了解更多关于这个网站',
        accentColor: '动态配色', footerIndex: '© 2026 ぼりんの网站 | ぼりん所有权',
        // bilibili.html
        titleBilibili: 'B站热门视频 - ぼりんの网站', biliPageTitle: 'B站热门视频',
        biliTopTitle: '全站最热 TOP 10', openingApp: '正在打开B站APP...',
        biliFetchError: '无法获取B站热门视频数据', reload: '重新加载', openingVideo: '正在打开: ',
        footerBilibili: '© 2026 ぼりんの网站 | B站热门视频功能',
        // post.html
        titlePost: '帖子 - ぼりんの网站', editorNewTitle: '发布新帖子', editorEditTitle: '编辑帖子',
        enterPassword: '请输入管理密码', passwordPlaceholder: '输入密码...', verify: '验证',
        postTitleLabel: '帖子标题', titlePlaceholder: '输入标题...',
        tagsLabel: '标签 (如: #日常 #技术)', tagsPlaceholder: '#日常 #分享...',
        contentLabel: '帖子内容', contentPlaceholder: '写下你的想法...',
        addImageLabel: '添加图片 (最多5张，可选)', selectImage: '选择图片',
        publishPost: '发布帖子', saveChanges: '保存修改', myPosts: '我的帖子', tagsCategory: '标签分类',
        footerPost: '© 2026 ぼりんの网站 | 帖子动态',
        loadingPosts: '加载帖子...', verifyFirst: '请先验证密码', authExpired: '登录已过期，请重新验证',
        wrongPassword: '密码错误', verifyFailed: '验证失败，请稍后重试',
        maxImages: '最多5张图片', noTags: '暂无标签', all: '全部',
        noPosts: '暂无帖子', noPostsHint: '点击右下角按钮发布吧！',
        edit: '编辑', delete: '删除', confirmDelete: '确定要删除这篇帖子吗？',
        deleteSuccess: '删除成功', fillTitleContent: '请填写标题和内容',
        saving: '保存中...', publishing: '发布中...', editSuccess: '修改成功！', publishSuccess: '发布成功！',
        // search.html
        titleSearch: '搜索 - ぼりんの网站', search: '搜索',
        searchPlaceholder: '搜索功能、帖子、标签...', searchTips: '搜索提示',
        searchTipsContent: '输入关键词搜索网站功能和帖子内容...', searchResults: '搜索结果',
        startSearch: '输入关键词开始搜索', footerSearch: '© 2026 ぼりんの网站 | 搜索页面',
        resultCount: '条结果', noResults: '未找到相关结果',
        menuCategory: '功能菜单', relatedPosts: '相关帖子',
        // about.html
        titleAbout: '关于我们 - ぼりんの网站', aboutTitle: '关于ぼりんの网站',
        creatorName: 'ぼりん', creatorTitle: '网站创始人 & 唯一开发者',
        aboutContent1: '本网站由 ぼりん 一人独立设计、开发和维护。',
        aboutContent2: '从创意构思到代码实现，每一个细节都倾注了对技术与美学的追求。',
        aboutContent3: 'ぼりん热爱编程与设计，致力于打造简洁、高效、美观的Web体验。',
        qqGroupIntro: '如果您想加入开发或赞助本项目', qqGroupJoin: '欢迎加入我们的QQ群：',
        thanksSupport: '感谢您对ぼりんの网站的支持！', footerAbout: '© 2026 ぼりんの网站 | 关于我们页面',
        // p/index.html
        titlePostDetail: '帖子详情 - ぼりんの网站', postDetail: '帖子详情', backToPosts: '返回帖子列表',
        commentsSection: '评论区', nicknamePlaceholder: '你的昵称', commentPlaceholder: '写下你的评论...',
        submitComment: '发表评论', footerPostDetail: '© 2026 ぼりんの网站 | 帖子详情',
        postNotFound: '帖子不存在', back: '返回', noComments: '暂无评论',
        enterNickname: '请输入昵称', enterComment: '请输入评论内容', commentSuccess: '评论成功！',
        // 404.html
        title404: '404 - 页面未找到 | ぼりんの网站', error404Title: 'Not Found This Page',
        error404Message: '抱歉，您访问的页面不存在或已被删除',
        // settings.html
        pageTitle: '系统设置', settingsTitle: '系统设置',
        appearance: '外观主题', light: '浅色模式', dark: '深色模式', auto: '自动切换',
        language: '语言设置', display: '显示设置',
        showCovers: '显示视频封面', showCoversDesc: '在视频列表中显示封面图片',
        animations: '动画效果', animationsDesc: '启用页面过渡动画',
        dataMgmt: '数据管理', clearCache: '清除缓存', clearCacheDesc: '清除本地存储的设置和数据',
        save: '保存设置', info1: '设置将保存在浏览器Cookies中', info2: '清除浏览器数据会重置所有设置',
        footer: '© 2026 ぼりんの网站 | 设置页面', saved: '设置已保存',
        savedMsg: '设置已保存！', cacheCleared: '缓存已清除！'
    },
    'zh-tw': {
        siteTitle: 'ぼりんの網站', sidebarTitle: 'ぼりんの選單',
        menuBilibili: 'B站熱門影片', menuPost: '貼文動態', menuSettings: '設定', menuAbout: '關於我們',
        moreSoon: '更多功能開發中...', backHome: '返回首頁', loading: '載入中...',
        beijingTime: '北京時間：', justNow: '剛剛', monthsAgo: '個月前', daysAgo: '天前', hoursAgo: '小時前', minutesAgo: '分鐘前',
        welcomeText: '歡迎來到ぼりんの網站！', subText: 'ぼりん•ボリンの勾石網站',
        cardBilibiliTitle: 'B站熱門影片', cardBilibiliDesc: '查看B站熱門影片排行',
        cardPostTitle: '貼文動態', cardPostDesc: '瀏覽和發布貼文',
        cardSettingsTitle: '設定', cardSettingsDesc: '自訂網站主題和偏好',
        cardAboutTitle: '關於我們', cardAboutDesc: '瞭解更多關於這個網站',
        accentColor: '動態配色', footerIndex: '© 2026 ぼりんの網站 | ぼりん所有權',
        titleBilibili: 'B站熱門影片 - ぼりんの網站', biliPageTitle: 'B站熱門影片',
        biliTopTitle: '全站最熱 TOP 10', openingApp: '正在開啟B站APP...',
        biliFetchError: '無法取得B站熱門影片資料', reload: '重新載入', openingVideo: '正在開啟: ',
        footerBilibili: '© 2026 ぼりんの網站 | B站熱門影片功能',
        titlePost: '貼文 - ぼりんの網站', editorNewTitle: '發布新貼文', editorEditTitle: '編輯貼文',
        enterPassword: '請輸入管理密碼', passwordPlaceholder: '輸入密碼...', verify: '驗證',
        postTitleLabel: '貼文標題', titlePlaceholder: '輸入標題...',
        tagsLabel: '標籤 (如: #日常 #技術)', tagsPlaceholder: '#日常 #分享...',
        contentLabel: '貼文內容', contentPlaceholder: '寫下你的想法...',
        addImageLabel: '新增圖片 (最多5張，可選)', selectImage: '選擇圖片',
        publishPost: '發布貼文', saveChanges: '儲存修改', myPosts: '我的貼文', tagsCategory: '標籤分類',
        footerPost: '© 2026 ぼりんの網站 | 貼文動態',
        loadingPosts: '載入貼文...', verifyFirst: '請先驗證密碼', authExpired: '登入已過期，請重新驗證',
        wrongPassword: '密碼錯誤', verifyFailed: '驗證失敗，請稍後重試',
        maxImages: '最多5張圖片', noTags: '暫無標籤', all: '全部',
        noPosts: '暫無貼文', noPostsHint: '點擊右下角按鈕發布吧！',
        edit: '編輯', delete: '刪除', confirmDelete: '確定要刪除這篇貼文嗎？',
        deleteSuccess: '刪除成功', fillTitleContent: '請填寫標題和內容',
        saving: '儲存中...', publishing: '發布中...', editSuccess: '修改成功！', publishSuccess: '發布成功！',
        titleSearch: '搜尋 - ぼりんの網站', search: '搜尋',
        searchPlaceholder: '搜尋功能、貼文、標籤...', searchTips: '搜尋提示',
        searchTipsContent: '輸入關鍵詞搜尋網站功能和貼文內容...', searchResults: '搜尋結果',
        startSearch: '輸入關鍵詞開始搜尋', footerSearch: '© 2026 ぼりんの網站 | 搜尋頁面',
        resultCount: '條結果', noResults: '未找到相關結果',
        menuCategory: '功能選單', relatedPosts: '相關貼文',
        titleAbout: '關於我們 - ぼりんの網站', aboutTitle: '關於ぼりんの網站',
        creatorName: 'ぼりん', creatorTitle: '網站創辦人 & 唯一開發者',
        aboutContent1: '本網站由 ぼりん 一人獨立設計、開發和維護。',
        aboutContent2: '從創意構思到程式碼實現，每一個細節都傾注了對技術與美學的追求。',
        aboutContent3: 'ぼりん熱愛程式設計與設計，致力於打造簡潔、高效、美觀的Web體驗。',
        qqGroupIntro: '如果您想加入開發或贊助本專案', qqGroupJoin: '歡迎加入我們的QQ群：',
        thanksSupport: '感謝您對ぼりんの網站的支持！', footerAbout: '© 2026 ぼりんの網站 | 關於我們頁面',
        titlePostDetail: '貼文詳情 - ぼりんの網站', postDetail: '貼文詳情', backToPosts: '返回貼文列表',
        commentsSection: '評論區', nicknamePlaceholder: '你的暱稱', commentPlaceholder: '寫下你的評論...',
        submitComment: '發表評論', footerPostDetail: '© 2026 ぼりんの網站 | 貼文詳情',
        postNotFound: '貼文不存在', back: '返回', noComments: '暫無評論',
        enterNickname: '請輸入暱稱', enterComment: '請輸入評論內容', commentSuccess: '評論成功！',
        title404: '404 - 頁面未找到 | ぼりんの網站', error404Title: 'Not Found This Page',
        error404Message: '抱歉，您造訪的頁面不存在或已被刪除',
        pageTitle: '系統設定', settingsTitle: '系統設定',
        appearance: '外觀主題', light: '淺色模式', dark: '深色模式', auto: '自動切換',
        language: '語言設定', display: '顯示設定',
        showCovers: '顯示影片封面', showCoversDesc: '在影片清單中顯示封面圖片',
        animations: '動畫效果', animationsDesc: '啟用頁面過渡動畫',
        dataMgmt: '資料管理', clearCache: '清除快取', clearCacheDesc: '清除本機儲存的設定與資料',
        save: '儲存設定', info1: '設定將儲存在瀏覽器 Cookies 中', info2: '清除瀏覽器資料會重置所有設定',
        footer: '© 2026 ぼりんの網站 | 設定頁面', saved: '設定已儲存',
        savedMsg: '設定已儲存！', cacheCleared: '快取已清除！'
    },
    'en': {
        siteTitle: 'Borin Website', sidebarTitle: 'Menu',
        menuBilibili: 'Bilibili Hot', menuPost: 'Posts', menuSettings: 'Settings', menuAbout: 'About',
        moreSoon: 'More features coming...', backHome: 'Back to Home', loading: 'Loading...',
        beijingTime: 'Beijing Time: ', justNow: 'just now', monthsAgo: 'mo ago', daysAgo: 'd ago', hoursAgo: 'h ago', minutesAgo: 'min ago',
        welcomeText: 'Welcome to Borin Website!', subText: 'Borin\'s Awesome Website',
        cardBilibiliTitle: 'Bilibili Hot', cardBilibiliDesc: 'View Bilibili trending videos',
        cardPostTitle: 'Posts', cardPostDesc: 'Browse and publish posts',
        cardSettingsTitle: 'Settings', cardSettingsDesc: 'Customize theme and preferences',
        cardAboutTitle: 'About', cardAboutDesc: 'Learn more about this site',
        accentColor: 'Accent Color', footerIndex: '© 2026 Borin Website | All Rights Reserved',
        titleBilibili: 'Bilibili Hot - Borin Website', biliPageTitle: 'Bilibili Hot',
        biliTopTitle: 'Top 10 Trending', openingApp: 'Opening Bilibili App...',
        biliFetchError: 'Failed to fetch Bilibili videos', reload: 'Reload', openingVideo: 'Opening: ',
        footerBilibili: '© 2026 Borin Website | Bilibili Hot',
        titlePost: 'Posts - Borin Website', editorNewTitle: 'New Post', editorEditTitle: 'Edit Post',
        enterPassword: 'Enter admin password', passwordPlaceholder: 'Enter password...', verify: 'Verify',
        postTitleLabel: 'Post Title', titlePlaceholder: 'Enter title...',
        tagsLabel: 'Tags (e.g. #daily #tech)', tagsPlaceholder: '#daily #share...',
        contentLabel: 'Content', contentPlaceholder: 'Write your thoughts...',
        addImageLabel: 'Add images (max 5, optional)', selectImage: 'Select Images',
        publishPost: 'Publish', saveChanges: 'Save Changes', myPosts: 'My Posts', tagsCategory: 'Tags',
        footerPost: '© 2026 Borin Website | Posts',
        loadingPosts: 'Loading posts...', verifyFirst: 'Please verify first', authExpired: 'Session expired, please re-verify',
        wrongPassword: 'Wrong password', verifyFailed: 'Verification failed, try again later',
        maxImages: 'Max 5 images', noTags: 'No tags', all: 'All',
        noPosts: 'No posts yet', noPostsHint: 'Click the button below to publish!',
        edit: 'Edit', delete: 'Delete', confirmDelete: 'Are you sure you want to delete this post?',
        deleteSuccess: 'Deleted', fillTitleContent: 'Please fill in title and content',
        saving: 'Saving...', publishing: 'Publishing...', editSuccess: 'Updated!', publishSuccess: 'Published!',
        titleSearch: 'Search - Borin Website', search: 'Search',
        searchPlaceholder: 'Search features, posts, tags...', searchTips: 'Search Tips',
        searchTipsContent: 'Enter keywords to search site features and post content...', searchResults: 'Search Results',
        startSearch: 'Enter keywords to start searching', footerSearch: '© 2026 Borin Website | Search',
        resultCount: 'results', noResults: 'No results found',
        menuCategory: 'Features', relatedPosts: 'Related Posts',
        titleAbout: 'About - Borin Website', aboutTitle: 'About Borin Website',
        creatorName: 'Borin', creatorTitle: 'Founder & Solo Developer',
        aboutContent1: 'This website is independently designed, developed and maintained by Borin.',
        aboutContent2: 'From concept to code, every detail reflects a passion for technology and aesthetics.',
        aboutContent3: 'Borin loves programming and design, dedicated to creating clean, efficient and beautiful web experiences.',
        qqGroupIntro: 'If you want to join development or sponsor this project', qqGroupJoin: 'Welcome to our QQ group:',
        thanksSupport: 'Thank you for supporting Borin Website!', footerAbout: '© 2026 Borin Website | About',
        titlePostDetail: 'Post Detail - Borin Website', postDetail: 'Post Detail', backToPosts: 'Back to Posts',
        commentsSection: 'Comments', nicknamePlaceholder: 'Your nickname', commentPlaceholder: 'Write a comment...',
        submitComment: 'Post Comment', footerPostDetail: '© 2026 Borin Website | Post Detail',
        postNotFound: 'Post not found', back: 'Back', noComments: 'No comments yet',
        enterNickname: 'Please enter nickname', enterComment: 'Please enter comment', commentSuccess: 'Comment posted!',
        title404: '404 - Page Not Found | Borin Website', error404Title: 'Not Found This Page',
        error404Message: 'Sorry, the page you are looking for does not exist or has been removed',
        pageTitle: 'Settings', settingsTitle: 'Settings',
        appearance: 'Appearance', light: 'Light', dark: 'Dark', auto: 'Auto',
        language: 'Language', display: 'Display',
        showCovers: 'Show video covers', showCoversDesc: 'Display cover images in video lists',
        animations: 'Animations', animationsDesc: 'Enable page transition animations',
        dataMgmt: 'Data Management', clearCache: 'Clear Cache', clearCacheDesc: 'Clear locally stored settings and data',
        save: 'Save Settings', info1: 'Settings are stored in browser cookies', info2: 'Clearing browser data resets all settings',
        footer: '© 2026 Borin Website | Settings', saved: 'Settings saved',
        savedMsg: 'Settings saved!', cacheCleared: 'Cache cleared!'
    },
    'ja': {
        siteTitle: 'ぼりんの网站', sidebarTitle: 'ぼりんのメニュー',
        menuBilibili: 'Bilibili人気動画', menuPost: '投稿', menuSettings: '設定', menuAbout: '私たちについて',
        moreSoon: '他の機能は開発中...', backHome: 'ホームに戻る', loading: '読み込み中...',
        beijingTime: '北京時間：', justNow: 'たった今', monthsAgo: 'ヶ月前', daysAgo: '日前', hoursAgo: '時間前', minutesAgo: '分前',
        welcomeText: 'ぼりんの网站へようこそ！', subText: 'ぼりん•ボリンの素晴らしいサイト',
        cardBilibiliTitle: 'Bilibili人気動画', cardBilibiliDesc: 'Bilibiliのトレンド動画を見る',
        cardPostTitle: '投稿', cardPostDesc: '投稿を閲覧・公開',
        cardSettingsTitle: '設定', cardSettingsDesc: 'テーマと設定をカスタマイズ',
        cardAboutTitle: '私たちについて', cardAboutDesc: 'このサイトについてもっと知る',
        accentColor: 'アクセントカラー', footerIndex: '© 2026 ぼりんの网站 | 全著作権所有',
        titleBilibili: 'Bilibili人気動画 - ぼりんの网站', biliPageTitle: 'Bilibili人気動画',
        biliTopTitle: 'トップ10トレンド', openingApp: 'Bilibiliアプリを開いています...',
        biliFetchError: 'Bilibili動画の取得に失敗しました', reload: '再読み込み', openingVideo: '開いています: ',
        footerBilibili: '© 2026 ぼりんの网站 | Bilibili人気動画機能',
        titlePost: '投稿 - ぼりんの网站', editorNewTitle: '新規投稿', editorEditTitle: '投稿を編集',
        enterPassword: '管理パスワードを入力', passwordPlaceholder: 'パスワードを入力...', verify: '認証',
        postTitleLabel: '投稿タイトル', titlePlaceholder: 'タイトルを入力...',
        tagsLabel: 'タグ (例: #日常 #技術)', tagsPlaceholder: '#日常 #共有...',
        contentLabel: '投稿内容', contentPlaceholder: '思いをつづる...',
        addImageLabel: '画像を追加 (最大5枚、任意)', selectImage: '画像を選択',
        publishPost: '投稿を公開', saveChanges: '変更を保存', myPosts: 'マイ投稿', tagsCategory: 'タグ分類',
        footerPost: '© 2026 ぼりんの网站 | 投稿',
        loadingPosts: '投稿を読み込み中...', verifyFirst: '先に認証してください', authExpired: 'セッションが期限切れです。再認証してください',
        wrongPassword: 'パスワードが間違っています', verifyFailed: '認証に失敗しました。後でもう一度お試しください',
        maxImages: '最大5枚まで', noTags: 'タグなし', all: 'すべて',
        noPosts: '投稿がまだありません', noPostsHint: '右下のボタンをタップして公開しましょう！',
        edit: '編集', delete: '削除', confirmDelete: 'この投稿を削除しますか？',
        deleteSuccess: '削除しました', fillTitleContent: 'タイトルと内容を入力してください',
        saving: '保存中...', publishing: '公開中...', editSuccess: '更新しました！', publishSuccess: '公開しました！',
        titleSearch: '検索 - ぼりんの网站', search: '検索',
        searchPlaceholder: '機能、投稿、タグを検索...', searchTips: '検索のヒント',
        searchTipsContent: 'キーワードを入力してサイト機能と投稿内容を検索...', searchResults: '検索結果',
        startSearch: 'キーワードを入力して検索を開始', footerSearch: '© 2026 ぼりんの网站 | 検索ページ',
        resultCount: '件', noResults: '結果が見つかりません',
        menuCategory: '機能メニュー', relatedPosts: '関連投稿',
        titleAbout: '私たちについて - ぼりんの网站', aboutTitle: 'ぼりんの网站について',
        creatorName: 'ぼりん', creatorTitle: 'サイト創設者 & 唯一の開発者',
        aboutContent1: '本サイトは ぼりん が一人で設計・開発・運営しています。',
        aboutContent2: 'アイデアからコードまで、すべての細部に技術と美学への情熱が注がれています。',
        aboutContent3: 'ぼりんはプログラミングとデザインを愛し、シンプルで効率的で美しいWeb体験を作り出すことに尽力しています。',
        qqGroupIntro: '開発に参加したりこのプロジェクトを支援したい方は', qqGroupJoin: 'QQグループへどうぞ：',
        thanksSupport: 'ぼりんの网站を応援していただきありがとうございます！', footerAbout: '© 2026 ぼりんの网站 | 私たちについてページ',
        titlePostDetail: '投稿詳細 - ぼりんの网站', postDetail: '投稿詳細', backToPosts: '投稿リストに戻る',
        commentsSection: 'コメント', nicknamePlaceholder: 'ニックネーム', commentPlaceholder: 'コメントを書く...',
        submitComment: 'コメントを投稿', footerPostDetail: '© 2026 ぼりんの网站 | 投稿詳細',
        postNotFound: '投稿が見つかりません', back: '戻る', noComments: 'コメントがまだありません',
        enterNickname: 'ニックネームを入力してください', enterComment: 'コメントを入力してください', commentSuccess: 'コメントしました！',
        title404: '404 - ページが見つかりません | ぼりんの网站', error404Title: 'Not Found This Page',
        error404Message: '申し訳ございません。お探しのページは存在しないか、削除されています',
        pageTitle: '設定', settingsTitle: '設定',
        appearance: '外観テーマ', light: 'ライト', dark: 'ダーク', auto: '自動',
        language: '言語設定', display: '表示設定',
        showCovers: '動画のサムネイルを表示', showCoversDesc: '動画リストにサムネイルを表示します',
        animations: 'アニメーション', animationsDesc: 'ページ遷移アニメーションを有効にする',
        dataMgmt: 'データ管理', clearCache: 'キャッシュを消去', clearCacheDesc: 'ローカルに保存された設定とデータを消去します',
        save: '設定を保存', info1: '設定はブラウザの Cookie に保存されます', info2: 'ブラウザのデータを消去するとすべての設定がリセットされます',
        footer: '© 2026 ぼりんの网站 | 設定ページ', saved: '設定を保存しました',
        savedMsg: '設定を保存しました！', cacheCleared: 'キャッシュを消去しました！'
    }
};

const LANG_HTML = { 'zh': 'zh-CN', 'zh-tw': 'zh-TW', 'en': 'en', 'ja': 'ja' };

// 设置 cookie
function setCookie(name, value, days) {
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + new Date(Date.now() + days * 864e5).toUTCString() + '; path=/';
}
// 获取 cookie
function getCookie(name) {
    const c = document.cookie.split('; ').find(row => row.startsWith(name + '='));
    return c ? decodeURIComponent(c.split('=')[1]) : null;
}

// 应用语言：遍历所有 data-i18n 元素并替换文本
function applyLanguage(lang) {
    const dict = I18N[lang] || I18N['zh'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (dict[key]) el.placeholder = dict[key];
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.dataset.i18nTitle;
        if (dict[key]) el.title = dict[key];
    });
    document.documentElement.setAttribute('lang', LANG_HTML[lang] || 'zh-CN');
    window.__currentLang = lang;
}

// 切换语言并保存
function changeLanguage(lang) {
    applyLanguage(lang);
    setCookie('language', lang, 365);
}

// 获取翻译文本
function t(key) {
    const dict = I18N[window.__currentLang] || I18N['zh'];
    return dict[key] || key;
}

// 页面加载时初始化语言
function initI18n() {
    const lang = getCookie('language') || 'zh';
    applyLanguage(lang);
}

// 本地化的时间相对格式
function getTimeAgo(dateStr) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const m = Math.floor(diff / 60000), h = Math.floor(diff / 3600000), dd = Math.floor(diff / 86400000);
    if (dd > 30) return Math.floor(dd / 30) + t('monthsAgo');
    if (dd > 0) return dd + t('daysAgo');
    if (h > 0) return h + t('hoursAgo');
    if (m > 0) return m + t('minutesAgo');
    return t('justNow');
}

// 自动初始化
initI18n();
