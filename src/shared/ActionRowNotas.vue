<template>
    <div class="row mt-1 mb-2">
        <div class="col-lg-3">
            <div class="input-group">
                <span class="input-group-text text-body buscador">
                    <svg style="margin-top: -7px;" class="links" data-testid="geist-icon" fill="none" height="20"
                        shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20">
                        <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
                        <path d="M16 16l4.5 4.5"></path>
                    </svg>
                </span>
                <input type="text" v-model="search" class="form-control buscador" placeholder="Buscar" />
            </div>
        </div>
        <div class="col-lg-6">
            <div class="d-flex justify-content-start">
                <a @click="$emit('open')" role="button" class="fuente negros tamanio me-3">
                    <svg class="center-icon" style="color: #000" data-testid="geist-icon" fill="none" height="20"
                        shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20">
                        <path d="M6 9V2h12v7"></path>
                        <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"></path>
                        <path d="M6 14h12v8H6z"></path>
                    </svg> Reporte
                </a>
                <a @click="$emit('openModal')" role="button" class="fuente negros tamanio me-3">
                    <svg data-testid="geist-icon" fill="none" height="20" shape-rendering="geometricPrecision"
                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        viewBox="0 0 24 24" width="20" class="center-icon" style="color: #000">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                        <path d="M7 10l5 5 5-5"></path>
                        <path d="M12 15V3"></path>
                    </svg> Descargar
                </a>
                <a @click="$emit('toggle')" role="button" class="fuente negros tamanio ">
                    <svg class="center-icon" data-testid="geist-icon" fill="none" height="20" shape-rendering="geometricPrecision"
                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        viewBox="0 0 24 24" width="20" style="color: #000;">
                        <path
                            d="M15 3h6m0 0v6m0-6l-7 7M9 21H3m0 0v-6m0 6l7-7M3 9V3m0 0h6M3 3l7 7m11 5v6m0 0h-6m6 0l-7-7">
                        </path>
                    </svg>
                    Pantalla completa
                </a>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="d-flex justify-content-end">
                <a class="btn btn btn-vercel" @click="$emit('save')">
                    <svg style="color: currentcolor;margin-top: -3px;" data-testid="geist-icon" fill="none" height="20"
                        shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20">
                        <path d="M12 5v14"></path>
                        <path d="M5 12h14"></path>
                    </svg>
                    Guardar
                </a>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'ActionsTrask',
    props: {
        longitude: {
            type: Number,
        },
        allSelecteds: Boolean,
    },
    data() {
        return {
            search: '',
            quimestre: 'p1',
        }
    },
    watch: {
        search: function (value) {
            this.$emit("changeSearch", value);
        }
    }
}
</script>
<style>
.btnOption {
    width: 34px;
    height: 34px;
    border-radius: 5px;
    border: 1px solid #E8EAF0;
}

.center-icon {
    margin: 5px;
}
</style>