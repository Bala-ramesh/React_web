import AccessibleModal from '../components/demo/AccessibleModal'

/**
 * ComponentRegistry: add a new object here to automatically get a lab route
 * and an entry in the sidebar. Each item needs: id, name, description,
 * ariaPatterns, keyboardShortcuts, wcagCriteria, render.
 */
export const COMPONENT_REGISTRY = [
  {
    id: 'accessible-modal',
    name: 'Accessible Modal',
    description: 'Dialog with focus trap, Escape to close, and proper ARIA.',
    ariaPatterns: [
      'role="dialog"',
      'aria-modal="true"',
      'aria-labelledby',
    ],
    keyboardShortcuts: [
      'Esc — close',
      'Tab — trap forward',
      'Shift+Tab — trap reverse',
    ],
    wcagCriteria: [
      '2.1.1 Keyboard',
      '4.1.2 Name, Role, Value',
      '2.4.3 Focus Order',
    ],
    render: () => <AccessibleModal />,
  },
]

export function getComponentById(id) {
  return COMPONENT_REGISTRY.find((c) => c.id === id) ?? null
}
