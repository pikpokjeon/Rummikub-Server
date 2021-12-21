export const createCubes = () =>
{
    const kinds = {R: 13, G: 13, B: 13, Y: 13, X: 2};
    const cubes = Object.entries( kinds ).reduce( ( box, [color, count] ) =>
    {
        const set = color === 'X' ? Array( 2 ).fill( 'X' ) : Array.from( Array( count ), ( _, i ) => color + ( i + 1 ) ).flatMap( c => [c, c] )
        set.forEach( c => box.push( c ) )
        return box
    }, [] )
    return cubes
}
const getRandomIdx = max => Math.floor( Math.random() * max )

export const mixCubes = cubes =>
{
    const _cubes = [...cubes]
    return cubes.reduce( ( box, cube, i, init ) =>
    {
        while ( 1 )
        {
            const idx = getRandomIdx( _cubes.length )
            if ( _cubes[idx] )
            {
                box[i] = _cubes[idx], delete ( _cubes[idx] )
                break
            }
            continue
        }
        return box
    }, [] )
}

export const timing = ( time, fn ) => setTimeout( fn, time )

export const getColor = ( cube ) =>
{
    switch ( cube[0] )
    {
        case 'R': return 'red'
        case 'G': return 'green'
        case 'B': return 'blue'
        case 'Y': return '#ffa330'
    }
}