// LocalStorage 进度管理
const ProgressStorage = (function() {
  const STORAGE_KEY = 'wild_vegetables_progress';

  // 获取进度数据
  function getProgress() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : { mastered: [] };
    } catch (error) {
      console.error('Error reading progress:', error);
      return { mastered: [] };
    }
  }

  // 保存进度数据
  function saveProgress(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Error saving progress:', error);
      return false;
    }
  }

  // 检查是否已掌握
  function isMastered(rootId) {
    try {
      const progress = getProgress();
      return progress.mastered && progress.mastered.includes(rootId);
    } catch (error) {
      console.error('Error checking mastered status:', error);
      return false;
    }
  }

  // 标记为已掌握
  function markAsMastered(rootId) {
    try {
      const progress = getProgress();
      if (!progress.mastered) {
        progress.mastered = [];
      }
      if (!progress.mastered.includes(rootId)) {
        progress.mastered.push(rootId);
        saveProgress(progress);
      }
      return true;
    } catch (error) {
      console.error('Error marking as mastered:', error);
      return false;
    }
  }

  // 取消已掌握
  function unmarkAsMastered(rootId) {
    try {
      const progress = getProgress();
      if (progress.mastered) {
        progress.mastered = progress.mastered.filter(id => id !== rootId);
        saveProgress(progress);
      }
      return true;
    } catch (error) {
      console.error('Error unmarking as mastered:', error);
      return false;
    }
  }

  // 切换已掌握状态
  function toggleMastered(rootId) {
    try {
      if (isMastered(rootId)) {
        return unmarkAsMastered(rootId);
      } else {
        return markAsMastered(rootId);
      }
    } catch (error) {
      console.error('Error toggling mastered status:', error);
      return false;
    }
  }

  // 获取已掌握列表
  function getMasteredList() {
    try {
      const progress = getProgress();
      return progress.mastered || [];
    } catch (error) {
      console.error('Error getting mastered list:', error);
      return [];
    }
  }

  // 获取已掌握数量
  function getMasteredCount() {
    try {
      return getMasteredList().length;
    } catch (error) {
      console.error('Error getting mastered count:', error);
      return 0;
    }
  }

  // 重置进度
  function resetProgress() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Error resetting progress:', error);
      return false;
    }
  }

  // 公开接口
  return {
    getProgress,
    isMastered,
    markAsMastered,
    unmarkAsMastered,
    toggleMastered,
    getMasteredList,
    getMasteredCount,
    resetProgress
  };
})();

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ProgressStorage };
}
