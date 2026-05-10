    <script>
        // 主题管理
        function getBeijingHour() {
            const now = new Date();
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const beijing = new Date(utc + (3600000 * 8));
            return beijing.getHours();
        }
        
        function initTheme() {
            const savedTheme = getCookie('theme');
            if (savedTheme) {
                setTheme(savedTheme);
            } else {
                const hour = getBeijingHour();
                if (hour >= 6 && hour < 18) {
                    setTheme('light');
                } else {
                    setTheme('dark');
                }
            }
        }
        
        function setTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            const icon = document.querySelector('#themeToggle i');
            if (theme === 'dark') {
                icon.className = 'fas fa-moon';
            } else {
                icon.className = 'fas fa-sun';
            }
            setCookie('theme', theme, 365);
        }
        
        function toggleTheme() {
            const current = document.documentElement.getAttribute('data-theme');
            setTheme(current === 'dark' ? 'light' : 'dark');
        }
        
        function setCookie(name, value, days) {
            const expires = new Date(Date.now() + days * 864e5).toUTCString();
            document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
        }
        
        function getCookie(name) {
            const cookies = document.cookie.split('; ');
            for (let c of cookies) {
                const [k, v] = c.split('=');
                if (k === name) return decodeURIComponent(v);
            }
            return null;
        }
        
        initTheme();
        
        const sidebar = document.getElementById('sidebar');
        const menuToggle = document.getElementById('menuToggle');
        const closeSidebar = document.getElementById('closeSidebar');
        const overlay = document.getElementById('overlay');
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notification-text');
        const videosContainer = document.getElementById('videosContainer');
        
        menuToggle.addEventListener('click', function() { sidebar.classList.add('open'); overlay.classList.add('active'); document.body.classList.add('sidebar-open'); });
        function closeSidebarMenu() { sidebar.classList.remove('open'); overlay.classList.remove('active'); document.body.classList.remove('sidebar-open'); }
        closeSidebar.addEventListener('click', closeSidebarMenu);
        overlay.addEventListener('click', closeSidebarMenu);
        function navigateTo(page) { closeSidebarMenu(); setTimeout(() => { window.location.href = page; }, 300); }
        
        // 格式化播放量
        function formatViewCount(count) {
            if (count >= 100000000) return (count / 100000000).toFixed(1) + '亿';
            if (count >= 10000) return (count / 10000).toFixed(1) + '万';
            return count.toString();
        }
        
        // 格式化时长
        function formatDuration(seconds) {
            const h = Math.floor(seconds / 3600);
            const m = Math.floor((seconds % 3600) / 60);
            const s = seconds % 60;
            if (h > 0) {
                return h + ':' + m.toString().padStart(2, '0') + ':' + s.toString().padStart(2, '0');
            }
            return m + ':' + s.toString().padStart(2, '0');
        }
        
        // 获取B站热门视频
        async function fetchBilibiliHot() {
            try {
                const binId = '69abb4bbd0ea881f40f802db';
                const response = await fetch('https://api.jsonbin.io/v3/b/' + binId + '/latest');
                const data = await response.json();
                if (data.record && data.record.bilibili && data.record.bilibili.videos) {
                    return data.record.bilibili.videos;
                }
                return getSampleVideos();
            } catch (error) {
                console.error('获取B站热门失败:', error);
                return getSampleVideos();
            }
        }
        
        function getSampleVideos() {
            return [
                { bvid: 'BV1xx411c7mD', title: '【热门视频】精彩内容推荐', cover: '', duration: '10:24', up: '热门UP主', views: '100万' },
                { bvid: 'BV1xx411c7mE', title: '今日热点资讯汇总', cover: '', duration: '15:30', up: '资讯频道', views: '89万' },
                { bvid: 'BV1xx411c7mF', title: '超治愈的日常分享', cover: '', duration: '20:15', up: '生活博主', views: '156万' }
            ];
        }
        
        function renderVideos(videos) {
            if (videos.length === 0) {
                videosContainer.innerHTML = '<div class="loading"><i class="fas fa-exclamation-circle"></i><p>无法获取B站热门视频数据</p><button class="refresh-btn" onclick="loadVideos()"><i class="fas fa-sync-alt"></i> 重新加载</button></div>';
                return;
            }
            
            let html = '';
            videos.forEach(video => {
                html += '<div class="video-card" data-bvid="' + video.bvid + '" data-title="' + video.title + '"><div class="video-cover"><div class="cover-placeholder"><i class="fab fa-bilibili"></i></div><img src="' + video.cover + '" alt="' + video.title + '" loading="lazy" onerror="this.style.display=\'none\'" onload="this.style.opacity=\'1\'"><div class="video-duration">' + video.duration + '</div><div class="video-play-btn"><i class="fas fa-play"></i></div></div><div class="video-info"><h3 class="video-title">' + video.title + '</h3><div class="video-stats"><div class="up-name"><i class="fas fa-user"></i> ' + video.up + '</div><div class="views"><i class="fas fa-eye"></i> ' + video.views + '</div></div></div></div>';
            });
            videosContainer.innerHTML = html;
            
            document.querySelectorAll('.video-card').forEach(card => {
                card.addEventListener('click', function() {
                    openBilibiliVideo(this.dataset.bvid, this.dataset.title);
                });
            });
        }
        
        async function loadVideos() {
            videosContainer.innerHTML = '<div class="loading"><i class="fas fa-spinner"></i><p>加载中...</p></div>';
            const videos = await fetchBilibiliHot();
            renderVideos(videos);
        }
        
        function openBilibiliVideo(bvid, title) {
            notificationText.textContent = '正在打开: ' + title;
            notification.classList.add('show');
            try { window.location.href = 'bilibili://video/' + bvid; } catch (e) {}
            setTimeout(function() {
                if (!document.hidden) window.location.href = 'https://www.bilibili.com/video/' + bvid;
                else notification.classList.remove('show');
            }, 1500);
        }
        loadVideos();
    </script>
