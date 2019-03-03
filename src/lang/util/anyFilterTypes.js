import anyIs from './anyIs'

// TODO BRN: Eventually we need to add support for type heirarchies here.
// This would limit the number of checks we need to perform when determining
// which type `any` is. We do this by creating a tree with the given types based
// off of how they extend each other. We can then traverse the tree starting at
// the trunk. If a node if the tree is matched, only it's children are also possible
// matches since they are types that extend the parent's type. If no child
// matches it means only the current parent is a match as a type and should be returned.

/**
 * Filter all the `Type`s that `any` is a member of.
 *
 * @private
 * @function
 * @category lang.util
 * @since v0.1.0
 * @param {*} any The value to filter on.
 * @param {Seq<Type>}
 * @returns {Seq<Type>} The `Type`s that the value is a member of
 * @example
 *
 * anyFilterTypes('foo', Seq([Number, String]))
 * // => Seq[String]
 *
 * anyFilterTypes('foo@bar.com', Seq([Email, String]))
 * // => Seq[Email, String]
 */
const anyFilterTypes = (any, types) => types.filter((type) => anyIs(any, type))

export default anyFilterTypes
