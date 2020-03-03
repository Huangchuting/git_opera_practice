import Star from './star'
import {random} from '../../../util/util'
export default function starSky (ctx, w, h) {
    let num = random(50, 100)
    for (let i = 0; i < num; i++) {
        Star(ctx, w, h)
    }
    
}