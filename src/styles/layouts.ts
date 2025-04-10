import { tokens } from './tokens';

// Layout styles extracted from Figma
export const layouts = {
  // Basic layouts
  none: {
    mode: 'none',
    sizing: {}
  },

  // Flex layouts
  row: {
    mode: 'row',
    alignItems: 'center',
    gap: tokens.layout.spacing.sm
  },

  rowCenter: {
    mode: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: tokens.layout.spacing.sm
  },

  rowSpaceBetween: {
    mode: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: tokens.layout.spacing.sm
  },

  column: {
    mode: 'column',
    gap: tokens.layout.spacing.sm
  },

  columnSpaceBetween: {
    mode: 'column',
    justifyContent: 'space-between',
    gap: tokens.layout.spacing['3xl']
  },

  // Component-specific layouts
  documentTag: {
    mode: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: tokens.layout.spacing.sm,
    padding: tokens.components.documentTag.padding,
    sizing: {
      horizontal: 'hug',
      vertical: 'fixed'
    },
    dimensions: {
      height: tokens.components.documentTag.height
    }
  },

  sidePanel: {
    mode: 'column',
    justifyContent: 'space-between',
    gap: tokens.layout.spacing['3xl'],
    sizing: {
      horizontal: 'fixed',
      vertical: 'fixed'
    },
    dimensions: {
      width: tokens.layout.sizing.sidePanel.width,
      height: tokens.layout.sizing.sidePanel.height
    }
  },

  documentItemList: {
    mode: 'column',
    gap: tokens.layout.spacing.lg,
    sizing: {
      horizontal: 'fixed',
      vertical: 'hug'
    },
    dimensions: {
      width: tokens.layout.sizing.documentItem.width
    }
  },

  documentItem: {
    mode: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: tokens.layout.spacing.sm,
    sizing: {
      horizontal: 'fill',
      vertical: 'hug'
    }
  },

  documentActions: {
    mode: 'row',
    alignItems: 'center',
    gap: tokens.layout.spacing.sm
  },

  documentNav: {
    mode: 'row',
    alignItems: 'center',
    gap: tokens.layout.spacing.sm
  },

  documentTop: {
    mode: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: tokens.layout.spacing['4xl'],
    sizing: {
      horizontal: 'fixed',
      vertical: 'fixed'
    },
    dimensions: {
      width: tokens.layout.sizing.document.width,
      height: tokens.layout.sizing.document.height
    }
  },

  documentBottom: {
    mode: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '49px',
    sizing: {
      horizontal: 'fixed',
      vertical: 'fixed'
    },
    dimensions: {
      width: tokens.layout.sizing.document.width,
      height: tokens.layout.sizing.document.height
    }
  },

  workspace: {
    mode: 'row',
    alignItems: 'center',
    gap: tokens.layout.spacing.xl,
    sizing: {
      horizontal: 'fixed',
      vertical: 'hug'
    },
    dimensions: {
      width: tokens.layout.sizing.workspace.width
    }
  },

  topBar: {
    mode: 'column',
    alignSelf: 'stretch',
    gap: tokens.layout.spacing.md
  },

  spacesContainer: {
    mode: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: tokens.layout.spacing['5xl']
  },

  iconButton: {
    mode: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: tokens.components.iconButton.padding,
    sizing: {
      horizontal: 'fixed',
      vertical: 'fixed'
    },
    dimensions: {
      width: tokens.layout.sizing.icon.width,
      height: tokens.layout.sizing.icon.height
    }
  },

  textButton: {
    mode: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: tokens.components.textButton.padding,
    sizing: {
      horizontal: 'fixed',
      vertical: 'hug'
    }
  },

  textFormatControl: {
    mode: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: tokens.components.textFormatControl.padding,
    sizing: {
      horizontal: 'hug',
      vertical: 'hug'
    }
  },

  textSizeControl: {
    mode: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: tokens.layout.spacing.sm,
    padding: tokens.components.textSizeControl.padding,
    sizing: {
      horizontal: 'hug',
      vertical: 'fixed'
    },
    dimensions: {
      height: tokens.layout.sizing.icon.height
    }
  }
} as const;

// Type exports
export type Layouts = typeof layouts; 