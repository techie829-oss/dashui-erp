/**
 * MyDash UI Kit - Main JavaScript
 * Vanilla JS interactions for dashboard
 */

(function() {
  'use strict';

  // ----------------------------------------
  // Theme Toggle
  // ----------------------------------------
  const html = document.documentElement;

  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      html.classList.add('dark');
    }
  }

  // Run immediately to prevent flicker
  initTheme();

  // ----------------------------------------
  // Theme Toggle
  // ----------------------------------------
  const themeToggle = document.getElementById('themeToggle');

  function toggleTheme() {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    showToast(isDark ? 'Dark mode enabled' : 'Light mode enabled', 'info');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // ----------------------------------------
  // Sidebar Toggle
  // ----------------------------------------
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');

  function toggleSidebar() {
    const isMobile = window.innerWidth < 768; // Matching $breakpoint-md

    if (isMobile) {
      const isActive = sidebar.classList.toggle('mobile-active');
      if (sidebarBackdrop) {
        sidebarBackdrop.classList.toggle('active', isActive);
      }
      document.body.style.overflow = isActive ? 'hidden' : '';
    } else {
      sidebar.classList.toggle('collapsed');
      document.body.classList.toggle('sidebar-collapsed');
      
      const isCollapsed = sidebar.classList.contains('collapsed');
      localStorage.setItem('sidebarCollapsed', isCollapsed);
      
      if (sidebarToggle) {
        sidebarToggle.setAttribute('aria-expanded', String(!isCollapsed));
      }
    }
  }

  function closeMobileSidebar() {
    sidebar.classList.remove('mobile-active');
    if (sidebarBackdrop) {
      sidebarBackdrop.classList.remove('active');
    }
    document.body.style.overflow = '';
  }

  function initSidebar() {
    const savedState = localStorage.getItem('sidebarCollapsed');
    const isMobile = window.innerWidth < 768;

    if (!isMobile && savedState === 'true') {
      sidebar.classList.add('collapsed');
      document.body.classList.add('sidebar-collapsed');
    }
    
    // Sync ARIA state on load
    if (sidebarToggle) {
      const isCurrentlyCollapsed = sidebar.classList.contains('collapsed');
      sidebarToggle.setAttribute('aria-expanded', String(!isCurrentlyCollapsed));
    }
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebar);
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', closeMobileSidebar);
  }

  initSidebar();

  // ----------------------------------------
  // Sidebar Submenu Toggle
  // ----------------------------------------
  const submenuWrappers = document.querySelectorAll('.sidebar-submenu-wrapper');
  
  submenuWrappers.forEach(wrapper => {
    const trigger = wrapper.querySelector('.sidebar-nav-item.has-submenu');
    const submenu = wrapper.querySelector('.sidebar-submenu');
    
    if (trigger && submenu) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        trigger.classList.toggle('open');
        submenu.classList.toggle('open');
      });
    }
  });

  // ----------------------------------------
  // Dropdown Menu
  // ----------------------------------------
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.dropdown-trigger');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    if (!trigger || !menu) return;
    
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // Close other dropdowns
      document.querySelectorAll('.dropdown-menu.open').forEach(openMenu => {
        if (openMenu !== menu) {
          openMenu.classList.remove('open');
        }
      });
      
      menu.classList.toggle('open');
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu.open').forEach(menu => {
      menu.classList.remove('open');
    });
  });

  // ----------------------------------------
  // A11y Focus Trap & Dialog Management
  // ----------------------------------------
  let lastFocusedElement;

  function manageFocusTrap(element, isOpen) {
    if (isOpen) {
      lastFocusedElement = document.activeElement;
      const focusableElements = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];

      element.addEventListener('keydown', function(e) {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) { /* shift + tab */
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else { /* tab */
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      });

      if (firstFocusableElement) firstFocusableElement.focus();
    } else {
      if (lastFocusedElement) lastFocusedElement.focus();
    }
  }

  // ----------------------------------------
  // Modal
  // ----------------------------------------
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modal = document.getElementById('confirmModal');

  window.openModal = function(modalEl) {
    if (!modalEl) modalEl = modal;
    if (modalBackdrop) modalBackdrop.classList.add('active');
    if (modalEl) {
      modalEl.classList.add('active');
      modalEl.setAttribute('aria-hidden', 'false');
      manageFocusTrap(modalEl, true);
    }
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function(modalEl) {
    if (!modalEl) modalEl = modal;
    if (modalBackdrop) modalBackdrop.classList.remove('active');
    if (modalEl) {
      modalEl.classList.remove('active');
      modalEl.setAttribute('aria-hidden', 'true');
      manageFocusTrap(modalEl, false);
    }
    document.body.style.overflow = '';
  };

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', () => {
      closeModal();
    });
  }

  // Close modal/drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal.active');
      const activeDrawer = document.querySelector('.drawer.active');
      if (activeModal) closeModal(activeModal);
      if (activeDrawer) closeDrawer(activeDrawer);
    }
  });

  // ----------------------------------------
  // Drawer
  // ----------------------------------------
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawer = document.getElementById('drawer');

  window.openDrawer = function(drawerEl) {
    if (!drawerEl) drawerEl = drawer;
    if (drawerBackdrop) drawerBackdrop.classList.add('active');
    if (drawerEl) {
      drawerEl.classList.add('active');
      drawerEl.setAttribute('aria-hidden', 'false');
      manageFocusTrap(drawerEl, true);
    }
    document.body.style.overflow = 'hidden';
  };

  window.closeDrawer = function(drawerEl) {
    if (!drawerEl) drawerEl = drawer;
    if (drawerBackdrop) drawerBackdrop.classList.remove('active');
    if (drawerEl) {
      drawerEl.classList.remove('active');
      drawerEl.setAttribute('aria-hidden', 'true');
      manageFocusTrap(drawerEl, false);
    }
    document.body.style.overflow = '';
  };

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  // ----------------------------------------
  // Tabs
  // ----------------------------------------
  const tabContainers = document.querySelectorAll('.tabs');
  
  tabContainers.forEach(container => {
    const tabs = container.querySelectorAll('.tab-item');
    const tabContent = container.parentElement.querySelector('.tab-content');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        if (tab.classList.contains('tab-item-disabled')) return;
        
        // Remove active from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Show corresponding panel
        if (tabContent) {
          const panels = tabContent.querySelectorAll('.tab-content__panel');
          panels.forEach(panel => panel.classList.remove('active'));
          
          const targetPanel = tabContent.querySelector(`#${tab.getAttribute('data-tab')}`);
          if (targetPanel) targetPanel.classList.add('active');
        }
      });
    });
  });

  // ----------------------------------------
  // Table Selection
  // ----------------------------------------
  const selectAll = document.getElementById('selectAll');
  const tableCheckboxes = document.querySelectorAll('.table tbody .table-checkbox');

  if (selectAll) {
    selectAll.addEventListener('change', (e) => {
      tableCheckboxes.forEach(checkbox => {
        checkbox.checked = e.target.checked;
        updateRowSelection(checkbox);
      });
      updateBulkActions();
    });
  }

  tableCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      updateRowSelection(checkbox);
      updateBulkActions();
      updateSelectAll();
    });
  });

  function updateRowSelection(checkbox) {
    const row = checkbox.closest('tr');
    if (row) {
      row.classList.toggle('table-row-selected', checkbox.checked);
    }
  }

  function updateSelectAll() {
    if (!selectAll) return;
    const checkedCount = document.querySelectorAll('.table tbody .table-checkbox:checked').length;
    const totalCount = tableCheckboxes.length;
    selectAll.checked = checkedCount === totalCount;
    selectAll.indeterminate = checkedCount > 0 && checkedCount < totalCount;
  }

  // ----------------------------------------
  // Bulk Actions
  // ----------------------------------------
  const bulkActionsBar = document.querySelector('.table-bulk-actions');
  const bulkCount = document.querySelector('.table-bulk-actions__count');

  function updateBulkActions() {
    const checkedCount = document.querySelectorAll('.table tbody .table-checkbox:checked').length;
    
    if (bulkActionsBar) {
      bulkActionsBar.style.display = checkedCount > 0 ? 'flex' : 'none';
    }
    
    if (bulkCount) {
      bulkCount.textContent = `${checkedCount} item${checkedCount !== 1 ? 's' : ''} selected`;
    }
  }

  // ----------------------------------------
  // Form Validation
  // ----------------------------------------
  const forms = document.querySelectorAll('.form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');
      
      inputs.forEach(input => {
        const group = input.closest('.form-group');
        const isRequired = input.hasAttribute('required') || group?.querySelector('.form-label-required');
        
        if (isRequired && !input.value.trim()) {
          isValid = false;
          input.classList.add('form-input-error');
          input.setAttribute('aria-invalid', 'true');
          
          let errorId = input.id ? `${input.id}-error` : null;
          if (!errorId) {
            errorId = 'error-' + Math.random().toString(36).substr(2, 9);
            input.id = errorId.replace('-error', '');
          }
          input.setAttribute('aria-describedby', errorId);
          
          if (group && !group.querySelector('.form-error')) {
            const error = document.createElement('span');
            error.className = 'form-error';
            error.id = errorId;
            error.textContent = 'This field is required';
            group.appendChild(error);
          }
        } else {
          input.classList.remove('form-input-error');
          input.removeAttribute('aria-invalid');
          input.removeAttribute('aria-describedby');
          const error = group?.querySelector('.form-error');
          if (error && error.textContent === 'This field is required') {
            error.remove();
          }
        }
      });
      
      if (isValid) {
        const submitBtn = form.querySelector('[type="submit"]');
        if (submitBtn) {
          submitBtn.classList.add('btn-loading');
          submitBtn.disabled = true;
          
          setTimeout(() => {
            submitBtn.classList.remove('btn-loading');
            submitBtn.disabled = false;
            showToast('Form submitted successfully!', 'success');
          }, 1500);
        }
      }
    });

    const inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('form-input-error');
        const error = input.closest('.form-group')?.querySelector('.form-error');
        if (error) error.remove();
      });
    });
  });

  // ----------------------------------------
  // Toast Notifications
  // ----------------------------------------
  const toastContainer = createToastContainer();

  function createToastContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    container.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 8px;
    `;
    document.body.appendChild(container);
    return container;
  }

  window.showToast = function(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const colors = {
      success: '#16a34a',
      error: '#dc2626',
      warning: '#f59e0b',
      info: '#3b82f6'
    };
    
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ'
    };
    
    toast.style.cssText = `
      padding: 12px 20px;
      background-color: ${colors[type] || colors.info};
      color: white;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      animation: toastSlideIn 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
    `;
    
    toast.innerHTML = `<span>${icons[type] || icons.info}</span> ${message}`;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = 'toastSlideOut 0.3s ease forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };

  const style = document.createElement('style');
  style.textContent = `
    @keyframes toastSlideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes toastSlideOut {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  // ----------------------------------------
  // Search (Command K) & Expandable
  // ----------------------------------------
  const searchBar = document.getElementById('searchBar');
  const searchInput = document.getElementById('searchInput');

  function expandSearch() {
    if (searchBar) {
      searchBar.classList.add('expanded');
      if (searchInput) {
        searchInput.focus();
      }
    }
  }

  function collapseSearch() {
    if (searchBar && !searchInput?.value) {
      searchBar.classList.remove('expanded');
    }
  }

  if (searchBar) {
    searchBar.addEventListener('click', expandSearch);
    
    if (searchInput) {
      searchInput.addEventListener('blur', collapseSearch);
      searchInput.addEventListener('input', () => {
        if (!searchInput.value) {
          collapseSearch();
        }
      });
    }
  }

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      expandSearch();
    }
  });

  // ----------------------------------------
  // Pagination
  // ----------------------------------------
  const paginationBtns = document.querySelectorAll('.table-pagination__btn');

  paginationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.disabled || btn.classList.contains('active')) return;
      
      paginationBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const currentPage = parseInt(btn.textContent);
      const prevBtn = document.querySelector('.table-pagination__btn:first-child');
      const nextBtn = document.querySelector('.table-pagination__btn:last-child');
      
      if (prevBtn) prevBtn.disabled = currentPage === 1;
      if (nextBtn) nextBtn.disabled = currentPage === 24;
    });
  });

  // ----------------------------------------
  // Progress Bar Animation
  // ----------------------------------------
  const progressBars = document.querySelectorAll('.progress__bar');
  
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });

  // ----------------------------------------
  // Alert Close
  // ----------------------------------------
  const alertCloses = document.querySelectorAll('.alert-close');
  
  alertCloses.forEach(btn => {
    btn.addEventListener('click', () => {
      const alert = btn.closest('.alert');
      if (alert) {
        alert.style.animation = 'toastSlideOut 0.3s ease forwards';
        setTimeout(() => alert.remove(), 300);
      }
    });
  });

  // ----------------------------------------
  // Tooltip
  // ----------------------------------------
  const tooltips = document.querySelectorAll('[data-tooltip]');
  
  tooltips.forEach(el => {
    el.classList.add('tooltip');
    const text = el.getAttribute('data-tooltip');
    const position = el.getAttribute('data-tooltip-position') || 'top';
    
    const tooltipContent = document.createElement('span');
    tooltipContent.className = `tooltip__content tooltip-${position}`;
    tooltipContent.textContent = text;
    el.appendChild(tooltipContent);
  });

  // ----------------------------------------
  // Mobile Menu
  // ----------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // ----------------------------------------
  // Initialize
  // ----------------------------------------
  if (typeof lucide !== 'undefined') {
    lucide.createIcons({
      attrs: {
        'stroke-width': 2,
        'class': 'lucide-icon'
      }
    });
  }
  
  console.log('MyDash UI Kit v2 initialized (Pro Max Edition)');

})();
