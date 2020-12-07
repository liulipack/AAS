// 内容链接加属性
document.querySelectorAll('.md-content a').forEach((link) => {
    link.setAttribute('target','_blank');
    link.setAttribute('rel','nofollow noopener noreferrer');
});