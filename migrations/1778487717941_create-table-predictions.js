/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  pgm.createTable('predictions', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    image: {
      type: 'VARCHAR(255)',
      notNull: true,
    },
    label: {
      type: 'VARCHAR(255)',
      notNull: true,
    },
    confidence: {
      type: 'DOUBLE PRECISION',
      notNull: true,
    },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  pgm.dropTable('predictions');
};
