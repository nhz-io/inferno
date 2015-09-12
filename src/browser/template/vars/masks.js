export default {
    MUST_USE_ATTRIBUTE: 0x1,
    MUST_USE_PROPERTY: 0x2,
    HAS_SIDE_EFFECTS: 0x4,
    HAS_BOOLEAN_VALUE: 0x8,
    HAS_NUMERIC_VALUE: 0x10,
    HAS_POSITIVE_NUMERIC_VALUE: 0x20 | 0x10,
    HAS_OVERLOADED_BOOLEAN_VALUE: 0x40
};