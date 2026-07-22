const lib = require("将至lib");

const invincibleBulletType = (() => {

    const Kill = extend(BasicBulletType, {
        hitEntity(b, other, initialHealth) {
            if (other && other.kill) {
                Call.unitDestroy(other.id)
            }
        },
        hitTile(b, tile, x, y, health, direct)  {
            this.super$hitTile(b, tile, x, y, health, direct) ;
            if (tile) {
                tile.killed()
            }
        },
    });

    Kill.damage = Infinity;
    Kill.splashDamage = Infinity;
    Kill.splashDamageRadius = 80
    Kill.speed = 25;
    Kill.hitSize = 6;
    Kill.width = 9;
    Kill.height = 45;
    Kill.lifetime = 600;
    Kill.inaccuracy = 0;
    Kill.despawnEffect = Fx.hitBulletSmall;
    Kill.keepVelocity = false;
    return Kill;
})();

const turret = extend(Turret, "秒杀炮", {
});

lib.setBuildingSimple(turret, Turret.TurretBuild, {
    hasAmmo() { return true; },
    peekAmmo() { return invincibleBulletType; },
    useAmmo() { return invincibleBulletType; },
    shoot(type) {
        this.super$shoot(type)
    },
});

turret.targetInterval = 0;
