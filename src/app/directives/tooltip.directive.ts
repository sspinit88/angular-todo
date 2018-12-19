import {Directive, Input, Renderer2, ElementRef, OnInit} from '@angular/core';

// указываем имена, под которыми будем экспортировать класс директивы
// и получать по этим именам доступ к директиве -> exportAs: 'tooltip, tool, tip'

@Directive({
    selector: '[appTooltip]',
    exportAs: 'courseTooltip,tool,tip'
})
export class TooltipDirective implements OnInit {

    @Input()
    public set textTooltip(text: string) {
        if (!text) {
            console.log(-1);
            // если нет текста, то ничего не делаем
            return;
        }
        // передаем текст в созданную переменную, отвечающую за создание span
        this._tooltipContext.textContent = text;
    }

    // создаем переменную с типом HTMLSpanElement (т.к. будет использоваться span);
    private _tooltipContext: HTMLSpanElement = this._render.createElement('span');

    constructor(
        // напрямую с домом работать не желательно;
        // window есть далеко не на всех платформах;
        // однако, если нужно, то для этих целей используется _render: Renderer2;
        private _render: Renderer2,
        // ссылка на элемент позволяет получить доступ к элементу, к которому применяется директива
        private _elementRef: ElementRef
    ) {
    }

    public ngOnInit(): void {
        // добавляем динамически создаваемому элементу класс
        this._render.addClass(this._tooltipContext, 'ttp');
        // добавляем элемент, передаем ссылку на элемент, передаем динамически созданный элемент
        this._render.appendChild(this._elementRef.nativeElement, this._tooltipContext);
    }

    // создаем два метода, которые будут показывать и скрывать элемент (show() / hide())

    public show(): void {
        this._render.addClass(this._tooltipContext, 'open');
        // console.log('show');
    }

    public hide(): void {
        this._render.removeClass(this._tooltipContext, 'open');
        // console.log('hide');
    }

}
